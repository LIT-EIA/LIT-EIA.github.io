const decoder = new TextDecoder('utf-8');

async function cleanHtml() {

	let inputHtml = $('#inputHtml').val();
	let language = $('#language').val();
	var $EnglishTaskTemplate = $(`
	<div class="wb-tabs ignore-session">
		<div class="tabpanels">
			<details id="details-panel1" open=""><summary><span class="wb-inv" style="color:blue;">Top tab: </span>Overview</summary>
			</details>
			<details id="details-panel2" open=""><summary><span class="wb-inv" style="color:blue;">Top tab: </span>Step by Step</summary>
			</details>
			<details id="details-panel3" open=""><summary><span class="wb-inv" style="color:blue;">Top tab: </span>References</summary>
			</details>
		</div>
	</div>
	`);

// ===================================================================
//
//               		FIX WORD DOC CODE
//
// ===================================================================

	//Initial RegEx fixes to apply before any Jquery dom fixes -------------------------------------------------------
	
	// Fix common tag issues in HTML
	inputHtml = inputHtml.replace(/(<[a-zA-Z][^>]*)(?=<\/\1[^>]*>)/g, '$1>'); // Auto-close certain tags

	// Use DOMParser to parse the cleaned HTML string
	var parser = new DOMParser();
	var doc = parser.parseFromString(inputHtml, 'text/html');

	// Convert parsed content to jQuery
	var $parsedHtml = $(doc.body);

	//Jquery fixes to the HTML produceed by MS Word ------------------------------------------------------------------
	$parsedHtml = cleanMSWordTags($parsedHtml);
	$parsedHtml = cleanupTagProperties($parsedHtml);
	$parsedHtml = removeEmptyTags($parsedHtml);
	$parsedHtml = cleanTagsWithJustAPeriod($parsedHtml);
	$parsedHtml = fixListNesting($parsedHtml);
	$parsedHtml = cleanTagsWithJustAPeriod($parsedHtml);
	
	//Regex fixes to the HTML produced by MS word --------------------------
	$parsedHtml.html(cleanSummary($parsedHtml.html()));

	//Post Regex Jquery fixes to the HTML produced by MS word ---------------------------
	$parsedHtml = cleanOutTopTabsCode($parsedHtml);
	
// ===================================================================
//
//                        	  TEMPLATIZE
//
// ===================================================================

	$parsedHtml = processHeadings($parsedHtml);
	$parsedHtml = templatizeTaskTemplate($parsedHtml, $EnglishTaskTemplate);						

// ===================================================================
//
//                        APPLY STYLE GUIDE
//
// ===================================================================

// ******* [[ 2.1 - Capitalization ]] *******
//// ******* [[ Headings and Sub-headings ]] *******
////// ******* [[ H1 titles refer to the Published title on the KMT General tab. Capitalize the first letter of all words 4 letters or more. ]] *******
 	//processed earlier in templatize section
////// ******* [[ for H2 to H6 headings, the first letter of the first word in headings and subheadings (i.e. sentence case); ]] *******
	$parsedHtml = capitalizeHeadings($parsedHtml);
//// ******* [[ terms with an approved acronym (refer to section 2.5. Acronyms below); ]] *******

	let acronyms = [];
	let abbrs = {};

	if (language === 'english') {
		acronyms = ['ALWS', 'ALW', 'CPMS', 'DSB', 'DTH', 'GIS', 'ITRDS', 'NATS', 'PRB', 'PWS', 'RTR', 'SVR'];
		abbrs = {
			'GIS': '<abbr title="Guaranteed Income Supplement">GIS</abbr>',
			'ITRDS': '<abbr title="Information Technology Renewal Delivery System">ITRDS</abbr>',
			'ALW': '<abbr title="Allowance">ALW</abbr>',
			'ALWS': '<abbr title="Allowance for the survivor">ALWS</abbr>',
			'CPMS': '<abbr title="Corporate Payment Management System">CPMS</abbr>',
			'PWS': '<abbr title="Pensions Workload System">PWS</abbr>',
			'DSB': '<abbr title="Disability benefit">DSB</abbr>',
			'RTR': '<abbr title="Retirement">RTR</abbr>',
			'DTH': '<abbr title="Death">DTH</abbr>',
			'NATS': '<abbr title="National Automated Templates System">NATS</abbr>',
			'PRB': '<abbr title="Post-Retirement Benefit">PRB</abbr>',
			'SVR': '<abbr title="Survivor">SVR</abbr>'
		};
	} else if (language === 'french') {
		acronyms = ['ALCS', 'ALC', 'DEC', 'INV', 'RET', 'SERTI', 'SMGP', 'SRG', 'SURV', 'SCTP'];
		abbrs = {
			'SRG': '<abbr title="Supplément de revenu garanti">SRG</abbr>',
			'SERTI': '<abbr title="Système d\'exécution du renouvellement de la technologie de l\'information">SERTI</abbr>',
			'ALC': '<abbr title="Allocation">ALC</abbr>',
			'ALCS': '<abbr title="Allocation au survivant">ALCS</abbr>',
			'SMGP': '<abbr title="Système ministériel de gestion des paiements">SMGP</abbr>',
			'SCTP': '<abbr title="Système de la charge de travail relative aux pensions">SCTP</abbr>',
			'INV': '<abbr title="Invalidité">INV</abbr>',
			'RET': '<abbr title="Retraite">RET</abbr>',
			'DEC': '<abbr title="Décès">DEC</abbr>',
			'SURV': '<abbr title="Survivant">SURV</abbr>'
		};
	}
	// Sort acronyms by length descending to handle edge cases
	acronyms.sort(function(a, b) { return b.length - a.length; });

	// Parse the input HTML using jQuery
	const $doc = $($.parseHTML($parsedHtml));

	// First pass: Traverse the DOM and process text nodes, collect notes, tables, and anchors
	$doc.find('body').contents().each(function() {
		const $node = $(this);

		if ($node.is('text')) {
			let text = $node.text();

			// Process acronyms
			acronyms.forEach(function(acronym) {
				const abbrHTML = abbrs[acronym];
				const regex = new RegExp('\\b' + acronym + '\\b', 'g');

				text = text.replace(regex, function() {
					return abbrHTML;
				});
			});

			// If the text was changed, replace the text node with new nodes
			if (text !== $node.text()) {
				$node.replaceWith(text);
			}
		} else if ($node.is('p, div')) { // Process <p> and <div> tags
			let firstChild = $node.children().first();
			if (firstChild.is('strong') && /^Note\s*:\s*$/i.test(firstChild.text().trim())) {
				// Collect notes to process
				notesToProcess.push($node[0]);
			}
		} else if ($node.is('table')) { // Collect all tables
			tablesToProcess.push($node[0]);
		} else if ($node.is('a') && shouldRemoveAnchor($node[0])) { // Collect anchors to process
			anchorsToProcess.push($node[0]);
		}
	});



//// ******* [[ references to other articles (e.g. Refer to Pension Sharing) as they appear in the KMT; ]] *******




//// ******* [[ organizations (e.g. the Department, Immigration, Refugees and Citizenship Canada); titles (e.g. the Minister); and ]] *******
//Need a list to do it automatically


//// ******* [[ ethnic groups (e.g. First Nations).  ]] *******
//Need a list to do it automatically






// ******* [[ 2.2 - Punctuation ]] *******

//// ******* [[ Use double quotation marks (e.g. “example”) when: 
////// ******* [[ the user must write or enter something exactly as indicated; or

////// ******* [[ a term is being defined in accordance with a specific legislation, program or requirement.

////// ******* [[ Place punctuation within the closing quotation marks if it applies to the quotation itself.  

////// ******* [[ Place the punctuation outside the closing quotation marks if it applies to the whole sentence.  

////// ******* [[ Do not use quotation marks around the words yes and no when emphasis is needed. Instead, apply bold to these words.  



//// ******* [[ Comma 

////// ******* [[ In a sequence of items, do not put a comma before the final “and” or “or” in the sequence (unless it is required for clarification—see the examples below). 

////// ******* [[ In a more complicated series of items, for clarity and to avoid ambiguity, it is sometimes necessary to include a comma before the final element of the series.  


//// ******* [[ Geographical names

////// ******* [[ On the first occurrence, write the name of the city followed by a comma, then the name of the province. On subsequent occurrences in the same article, provide only the city name.  
				//(For more information on the proper use of commas in English, please consult the Comma section in the TERMIUM Plus HyperGrammar2 reference tool.)
				//http://www.btb.termiumplus.gc.ca/tpv2guides/guides/hyper/index-eng.html?lang=eng&page=comma.html



//// ******* [[ Colon 

////// ******* [[ If the colon follows text formatted in bold, apply bold font to the colon as well. Do not insert a space before a colon. 



//// ******* [[ Hyphens and dashes 

////// ******* [[ The em dash (the longer of the two dashes: Alt+0151, with no spaces on either side, can only be used in English articles. It is used to separate two or more elements in a title, heading or subheading, or in an example of free text.  

////// ******* [[ Em dash Alt+0150 with space on each side is used in French articles.  

////// ******* [[ Use a hyphen with system elements. 

////// ******* [[ Parentheses and brackets 

////// ******* [[ Parentheses add clutter and can sometimes cause confusion. For readers to understand web content easily, keep text simple and clutter-free. Use round parentheses (…) sparingly. 


//// ******* [[ Nested parentheses

////// ******* [[ Avoid parentheses within parentheses (nested) whenever possible. Instead, restructure the content so that parentheses are not needed.

////// ******* [[ Only if it is unavoidable, use round brackets () within another set of round brackets to enclose content.


//// ******* [[ Angle brackets NEW 

////// ******* [[ Angle brackets <...> are used in parts that need to be adapted in call scripts. 


//// ******* [[ Square brackets and curly brackets 

////// ******* [[ Square brackets […] and curly brackets {…} are not used in KMT content. 


//// ******* [[ Hashtag (#) NEW 

////// ******* [[ Never use the hashtag (#) as an abbreviation for “number’ as it is not accessible and will be read by screen readers as “hashtag” as opposed to “number” and the meaning may be lost. 



// ******* 2.3. Underlining, bold, and italics 

//// ******* [[ Underlining 

////// ******* [[ Do not use underlining, except in hyperlinks where it is applied automatically. 



//// ******* [[ Bold 

////// ******* [[ Bold is generally applied to the following elements of an article:  

////// ******* [[ system elements’ names, such as the names of fields, buttons, checkboxes and drop-downs (e.g. Click UPDATE, Select the Marital Status);  

////// ******* [[ special function keys on the keyboard (e.g. Alt, Enter, ESC, Option);  

////// ******* [[ a single capital letter to which a specific meaning or function has been assigned (e.g.N for no);

////// ******* [[ emphasize other important words (e.g. identify all errors or omissions).


//// ******* [[ Italics 

////// ******* [[ Do not italicize the short form of the title of an act, e.g. the OAS Act. Avoid the use of italics in the KMT in general.  

////// ******* [[ Note: Do not italicize pop-up messages. Use quotations and publishing will put it into a blockquote to make it stand out from the rest of the text. 

////// ******* [[ Note: Use italics when referring to legislation: The Old Age Security Act. Do not use the acronym OAS Act as it is not the title of the legislation. 



	//add classes to tables
	$parsedHtml.find('table').addClass('table table-bordered table-condensed table-hover table-striped');


	// Fix disclaimers and notes

	//add classes to notes and disclaimers
	applyDisclaimerClasses($EnglishTaskTemplate);
	applyNoteClasses($EnglishTaskTemplate);

	// Add IDs and classes to nested details tags
	$parsedHtml = updateDetailsTags($parsedHtml);




	var parsedHtmlAsText = $parsedHtml.html();

// Main function to handle all the processing

	var checkArray = []
	checkArray.push($('#removeEmptyTags'));
	checkArray.push($('#mergeRepeatedStrongTags'));
	checkArray.push($('#mergeChainedStrongTags'));
	checkArray.push($('#mergeHyperlinks'));
	checkArray.push($('#stripTableAttributes'));
	checkArray.push($('#stripPAttributes'));
	checkArray.push($('#stripListAttributes'));
	checkArray.push($('#removeEmptyPTags'));
	checkArray.push($('#removeNbsp'));

	for (let checkbox in checkArray) {
		if($(this).is(':checked'))
		{
			switch ($(this).prop().id) {
				case 'removeEmptyTags' :
					parsedHtmlAsText = removeEmptyTags(parsedHtmlAsText); break;
				case 'mergeRepeatedStrongTags':
					parsedHtmlAsText = mergeRepeatedStrongTags(parsedHtmlAsText); break;
				case 'mergeChainedStrongTags':
					parsedHtmlAsText = mergeChainedStrongTags(parsedHtmlAsText); break;
				case 'mergeHyperlinks':
					parsedHtmlAsText = mergeHyperlinks(parsedHtmlAsText); break;
				case 'stripTableAttributes':
					parsedHtmlAsText = stripTableAttributes(parsedHtmlAsText); break;
				case 'stripPAttributes':
					parsedHtmlAsText = stripPAttributes(parsedHtmlAsText); break;
				case 'stripListAttributes':
					parsedHtmlAsText = stripListAttributes(parsedHtmlAsText); break;
				case 'removeEmptyPTags':
					parsedHtmlAsText = removeEmptyPTags(parsedHtmlAsText); break;
				case 'removeNbsp':
					parsedHtmlAsText = removeNbsp(parsedHtmlAsText); break;
					default:
						console.warn('Unrecognized id:', $(checkbox).prop('id'));
						break;
			}
		}
	}

	parsedHtmlAsText = replaceBr(parsedHtmlAsText);
	parsedHtmlAsText = wrapTables(parsedHtmlAsText);
	parsedHtmlAsText = cleanseWhitespace(parsedHtmlAsText);
	parsedHtmlAsText = wrapPunctuationInStrong(parsedHtmlAsText);
	parsedHtmlAsText = handleDashes(parsedHtmlAsText);
	parsedHtmlAsText = movePunctuationOutsideAnchor(parsedHtmlAsText);
	

	// Finally, set the modified content back to $parsedHtml
	$parsedHtml.html(parsedHtmlAsText);


	// -- in french, space before a colon
	


	// Validate with W3C

	// Check if the parsed HTML has elements
	if ($parsedHtml.length > 0) {
		// Extract the content as HTML string (preserves the text as well)
		var outputString = $parsedHtml.html();

		// Insert the beautified HTML inside the previewHtml div as full HTML
		$('#previewHtml').html(outputString); // This will insert the actual beautified HTML

		// Escape any HTML tags to show them as text in the output (for display in code block)
		var escapedOutput = $('<div>').text(outputString).html();

		// Insert the escaped HTML inside a <pre><code> tag for display
		$('#outputHtml').html('<pre><code>' + escapedOutput + '</code></pre>');
	} else {
		console.error('No elements found in the parsed HTML');
	}

}


//// ******* [[ references to specific steps (e.g. Go to Step 4); ]] *******

	//Q: Does this only apply when this text is by itself or also in the middle of a sentence??
	/*
	$parsedHtml.find('*').contents().each(function() {
		// Check if the node is a text node (nodeType 3)
		if (this.nodeType === 3) {
			var text = this.nodeValue;
			
			// Check if the text contains "Go to Step"
			if (text.includes("Go to Step")) {
				console.log("Found text:", text);

				// Capitalize "Go" and "Step"
				var updatedText = text.replace(/\b(go|step)\b/gi, function(match) {
					return match.charAt(0).toUpperCase() + match.slice(1);
				});

				console.log("Updated text:", updatedText);

				// Update the text node with the modified text
				this.nodeValue = updatedText;
			}
		}
	});
	*/



// Functions for buttons on page -------------------------------------------------------------------------

function copyOutput() 
{
	const outputHtml = document.getElementById('outputHtml').innerText;
	navigator.clipboard.writeText(outputHtml).then(() => {
		alert('Output copied to clipboard!');
	}).catch(err => {
		console.error('Failed to copy: ', err);
	});
}

// Word doc cleanup functions -------------------------------------------------------------------------------

function cleanMSWordTags($parsedHtml) {
    // Remove the weird top of document UL after processing its contents
    $parsedHtml.find('ul[type="disc"]').remove();
    
    // Remove all JavaScript tags
    $parsedHtml.find('div[language="JavaScript"]').remove();
    
    // Remove all <ins> tags but keep their content (These are generated by track changes)
    $parsedHtml.find('ins').each(function() {
        $(this).replaceWith($(this).text());
    });
    
    // Remove all <del> tags and their content (These are generated by track changes)
    $parsedHtml.find('del').remove();
    
    // Remove all <a> tags whose href starts with '#'
    $parsedHtml.find('a[href^="#"]').remove(); // Removes <a> tags with href starting with "#"
    
    // Remove spaces and newlines outside of tags and re-add newlines after each tag
    $parsedHtml.each(function() {
        var htmlContent = $(this).html();
        // Remove spaces and newlines outside of tags
        htmlContent = htmlContent.replace(/>\s+</g, '><');
        // Re-add newline after every closing tag
        htmlContent = htmlContent.replace(/<\/([a-zA-Z]+)>/g, '</$1>\n');
        $(this).html(htmlContent);
    });
    
    // Remove kmMeta section (MS Word metadata section, useless for final publishing)
    $parsedHtml.find('#kmMeta').remove(); 

    return $parsedHtml; // Return the modified jQuery object
}

function fixListNesting($html) {
	const looseLis = [];
	let needsUl = false;

	// Find all elements in the HTML and iterate through them
	$html.find('*').each(function() {
		const $child = $(this);
		
		// Check if the child is an <li> that is not inside any <ul> or <ol>
		if ($child.is('li') && !$child.closest('ul, ol').length) {
			// Collect loose <li> elements into the looseLis array
			looseLis.push($child.detach());
			needsUl = true;
		} else {
			// If a non-<li> element is encountered and we have loose <li> elements collected
			if (needsUl && looseLis.length > 0) {
				// Wrap the loose <li> elements in a new <ul>
				const newUl = $('<ul></ul>').append(looseLis);
				$child.before(newUl); // Insert the new <ul> before the current non-<li> element
				looseLis.length = 0; // Reset the array of loose <li> elements
				needsUl = false; // Reset the flag for needing a new <ul>
			}
		}

		// Handle nested <li> elements inside another <li>
		if ($child.is('li')) {
			$child.find('> li').each(function() {
				const $nestedLi = $(this);
				const $parentLi = $nestedLi.parent();

				// Create a new <ul> to wrap the nested <li> items
				const newUl = $('<ul></ul>');
				newUl.append($nestedLi.detach());

				// Append the <ul> inside the parent <li>
				$parentLi.append(newUl);
			});
		}
	});

	// If there are any remaining loose <li> elements after iterating through all children, wrap them in a <ul>
	if (needsUl && looseLis.length > 0) {
		const newUl = $('<ul></ul>').append(looseLis);
		$html.append(newUl); // Append the <ul> containing the remaining loose <li> elements
	}

	console.log($html.html())
	// Log the final result for debugging
	return $html;
}


function cleanupTagProperties($parsedHtml) {
    // Loop through each element in the parsed HTML except <span>
    $parsedHtml.find('*').each(function() {
        // Check if the element is not a <span>
        if (this.tagName.toLowerCase() !== 'span') {
            // Remove class, id, style attributes, and all other attributes
            $(this).removeAttr('class')
                   .removeAttr('id')
                   .removeAttr('style')
                   .removeAttr('role')
                   .removeAttr('aria-selected')
                   .removeAttr('aria-controls')
                   .removeAttr('aria-labelledby')
                   .removeAttr('aria-expanded')
                   .removeAttr('aria-hidden')
                   .removeAttr('aria-posinset')
                   .removeAttr('aria-setsize')
                   .removeAttr('open')
                   .removeAttr('tabindex')
                   .removeAttr('data-toggle')
                   .removeAttr('*'); // This will remove all other attributes
        } else if (this.tagName.toLowerCase() === 'span') {
            // Remove unnecessary attributes from <span>
            $(this).removeAttr('class')
                   .removeAttr('id')
                   .removeAttr('role')
                   .removeAttr('aria-selected')
                   .removeAttr('aria-controls')
                   .removeAttr('aria-labelledby')
                   .removeAttr('aria-expanded')
                   .removeAttr('aria-hidden')
                   .removeAttr('aria-posinset')
                   .removeAttr('aria-setsize')
                   .removeAttr('open')
                   .removeAttr('tabindex')
                   .removeAttr('data-toggle')
                   .removeAttr('*'); // This will remove all other attributes
            
            // Retain only font color in the style attribute and remove other styles
            var style = $(this).attr('style');
            if (style) {
                // Extract only the 'color' property from the style string
                var colorMatch = style.match(/color\s*:\s*[^;]+/i); // Regex to capture color: value
                
                if (colorMatch) {
                    // Keep only the 'color' property and set it back
                    $(this).attr('style', colorMatch[0]);
                } else {
                    // If no color is present, just remove the style attribute
                    $(this).removeAttr('style');
                }
            }
        }
    });

    return $parsedHtml;
}


function removeEmptyTags($html) {
    let hasEmptyTags = true;

    // Keep looping until no empty tags are left
    while (hasEmptyTags) {
        hasEmptyTags = false; // Assume no empty tags at the start of this loop

        // Loop through each of the tags to check within $html
        $html.find('span, li, p, div').each(function() { // You can add/remove tags here
            const $this = $(this);

            // Check if the element is empty
            if ($this.html().replace(/\s|&nbsp;/g, '').length === 0) {
                // If empty, remove the tag
                $this.remove();
                hasEmptyTags = true; // Mark that we found an empty tag
            }
        });
    }

    return $html;
}


function cleanTagsWithJustAPeriod($parsedHtml) {
	// Loop through each <p> element
	$parsedHtml.find('p').each(function() {
		// Check if the <p> tag contains a <span> with just a period
		if ($(this).find('span').text().trim() === '·') {
			$(this).remove(); // Remove the <p> tag
		}
	});

	return $parsedHtml; // Return the modified jQuery object
}


function cleanSummary(inputHtml) {
	// First, process the content inside <summary> tags only
	let cleanedHtml = inputHtml.replace(/(<summary[^>]*>)(.*?)(<\/summary>)/gs, function(match, openingSummary, content, closingSummary) {
	  
	  // Inside the <summary> tag:
	  // 1. If there are stray </span> tags but no opening <span> tags, insert an opening <span>
	  if (content.match(/<\/span>/g) && !content.match(/<span[^>]*>/)) {
		content = '<span>' + content; // Wrap content with <span>
	  }

	  // 2. Remove <p> and <span> tags inside <summary> that do not have a style attribute
	  content = content.replace(/<p(?![^>]*\sstyle\s*=)[^>]*>(.*?)<\/p>/gs, (match, pContent) => {
		return pContent; // Remove <p> tags but keep their content
	  });

	  content = content.replace(/<span(?![^>]*\sstyle\s*=)[^>]*>(.*?)<\/span>/gs, (match, spanContent) => {
		return spanContent; // Remove <span> tags but keep their content
	  });

	  // After cleaning, return the content inside <summary> tags
	  return openingSummary + content + closingSummary;
	});

	return cleanedHtml;
}


function cleanOutTopTabsCode($parsedHtml) {
    // Clone the original jQuery object to avoid mutating the input
    let $cleanedHtml = $parsedHtml.clone();

    // 1. Remove <summary> tags with "Top Tab:" inside <details> and preserve the content inside <details>
    $cleanedHtml.find("details").each(function() {
        let $details = $(this);
        let $summary = $details.find("summary").filter(function() {
            return $(this).text().includes("Top tab:");
        });
        
        if ($summary.length > 0) {
            // Keep the content inside <details> and remove only the <summary> tag
            $summary.remove();
        }
    });

    // 2. Remove <summary> tags with "Top Tab:" that are not inside a <details> tag
    $cleanedHtml.find("summary").each(function() {
        let $summary = $(this);
        if ($summary.text().includes("Top tab:") && !$summary.closest("details").length) {
            $summary.remove(); // Remove the <summary> if it's not inside a <details> tag
        }
    });

    // 3. Remove <details> elements that only contain <summary> with "Top Tab:" (if the <summary> has been removed)
    $cleanedHtml.find("details").each(function() {
        let $details = $(this);
        // If <details> contains no other content besides the summary we've removed, we remove it
        if ($details.find("summary").length === 0 && !$details.contents().length) {
            $details.remove();
        }
    });

    return $cleanedHtml; // Return the new jQuery object with the cleaned HTML
}


function updateDetailsTags(parsedHtml) {
  // Convert parsedHtml to a jQuery object if it's not already one
  const $toparse = $(parsedHtml);
  
  // Add IDs and classes to nested details tags
  let level1Count = 1;  // This will be used for the first-level details panel IDs
  $toparse.find('details').each(function() {
    // Check if it's a first-level <details> tag (no parent <details> inside it)
    if ($(this).parents('details').length === 0) {
      // First-level <details>: add id and open property
      $(this).attr('id', 'details-panel' + level1Count).attr('open', '');

      // Now, process second-level <details> inside the first-level <details>
      let level2Count = 1;  // Reset second-level counter for each first-level <details>

      $(this).find('> details').each(function() {
        // Second-level <details>: add id and expand-collapse-toggle-section class
        $(this).attr('id', 'details-panel' + level1Count + String.fromCharCode(96 + level2Count))
               .addClass('expand-collapse-toggle-section');
        level2Count++;  // Increment second-level counter
      });

      level1Count++;  // Increment first-level counter
    }
  });

  // Return the updated HTML
  return $toparse;
}

//Templatize functions

function processHeadings($parsedHtml) {
    // Clone the parsed HTML to avoid mutating the original input
    const $cleanedHtml = $parsedHtml.clone();

    // Process each <h1> element
    $cleanedHtml.find('h1').each(function() {
        var element = $(this);
        console.log("Processing h1 element:", element[0].tagName);

        // Iterate over the child nodes of the element (text nodes, elements, etc.)
        element.contents().each(function() {
            processNode(this);
        });

        // Function to process each node
        function processNode(node) {
            if (node.nodeType === 3) {  // Text node
                var text = node.nodeValue;
                console.log("Original text:", text);

                // Capitalize the first letter of words that are 4 letters or more
                var capitalizedText = text.replace(/\b([a-zA-Z]{4,})\b/g, function(match) {
                    return match.charAt(0).toUpperCase() + match.slice(1);
                });

                console.log("After applying capitalization:", capitalizedText);

                // Update the text node with the modified text
                node.nodeValue = capitalizedText;
            } else if (node.nodeType === 1) { // Element node (tag)
                // For element nodes (like <strong>), process the text inside recursively
                console.log("Processing tag:", node.tagName);
                $(node).contents().each(function() {
                    processNode(this); // Recurse into child elements
                });
            }
        }
    });

    // Get the content of the first <h1> inside $cleanedHtml and insert it into #documentTitle
    $('#documentTitle').html("<strong>Document title: </strong>" + $cleanedHtml.find('h1').first().html());
    
    // Remove <h1> elements from the cleaned HTML
    $cleanedHtml.find('h1').remove();

    return $cleanedHtml; // Return the modified jQuery object
}

function templatizeTaskTemplate($parsedHtml, $EnglishTaskTemplate) {
    // Clone the parsed HTML and the English task template to avoid direct mutations
    var $cleanedHtml = $parsedHtml.clone();
    var $templateCopy = $EnglishTaskTemplate.clone();

    // 1. Unwrap headers from div if they are the only content inside the div
    $cleanedHtml.find("div").each(function() {
        let $div = $(this);
        if ($div.children("h2, h3, h4, h5, h6").length === 1 && $div.children().length === 1) {
            $div.replaceWith($div.children("h2, h3, h4, h5, h6")); // Unwrap the header from div
        }
    });

    // List of headers we're looking for
    const headers = [
        "Summary", 
        "What you need to know", 
        "What you need to do", 
        "Forms", 
        "Letters", 
        "Glossary", 
        "Keywords"
    ];

    // Define the mapping for headers to their respective <details> container IDs
    const headerMapping = {
        "Summary": "#details-panel1",
        "What you need to know": "#details-panel1",
        "What you need to do": "#details-panel2",
        "Forms": "#details-panel3",
        "Letters": "#details-panel3",
        "Glossary": "#details-panel3",
        "Keywords": "#details-panel3"
    };

    // 2. Loop through each header and gather content
    headers.forEach(function(headerText) {
        // Find the header in $cleanedHtml
        let $header = $cleanedHtml.find("h2, h3, h4, h5, h6").filter(function() {
            return $(this).text().trim() === headerText;
        });

        // Check if header was found
        if ($header.length > 0) {
            let content = [];
            let nextHeaderFound = false;

            // 3. Loop through elements after the current header and gather content until we hit the next header
            $header.nextAll().each(function() {
                let $el = $(this);

                // If we encounter another header in the list, stop collecting
                if ($el.is("h2, h3, h4, h5, h6") && headers.includes($el.text().trim())) {
                    nextHeaderFound = true;
                }

                if (nextHeaderFound) {
                    return false;  // Stop adding content when we find the next header
                }

                // Collect the current element content
                content.push($el[0].outerHTML);
            });

            // 4. Determine the corresponding details container in the template
            let detailsContainerId = headerMapping[headerText];

            // If we have a valid details container ID, append the content to it
            if (detailsContainerId) {
                let $detailsContainer = $templateCopy.find(detailsContainerId);
                if ($detailsContainer.length > 0) {
                    // Include the header itself in the content
                    content.unshift($header[0].outerHTML);  // Add header at the start of the content
                    $detailsContainer.append(content.join('')); // Append the collected content
                }
            }
        }
    });

    // Return the modified $cleanedHtml to replace the content in $parsedHtml
    return $templateCopy;
}

// Style guide application functions --------------------------------------------------------------------------


function capitalizeHeadings($parsedHtml) {
    // Process each heading element
    $parsedHtml.find('h1, h2, h3, h4, h5, h6').each(function() {
        var element = $(this);

        // Iterate over the child nodes of the element (text nodes, elements, etc.)
        element.contents().each(function() {
            processNode(this);
        });

        // Function to process each node
        function processNode(node) {
            if (node.nodeType === 3) {  // Text node
                var text = node.nodeValue;

                // Step 1: Capitalize the first letter of the first word
                var firstLetterCapitalized = text.replace(/^([a-z])/i, function(match) {
                    return match.toUpperCase();
                });

                // Step 2: Capitalize first letters after sentence-ending punctuation
                var capitalizedText = firstLetterCapitalized.replace(/([.?!])\s*(<[^>]*>|\s)*([a-z])/g, function(match, punctuation, tags, letter) {
                    // Ensure we skip over tags by allowing optional tag elements or whitespace
                    return punctuation + ' ' + (tags || '') + letter.toUpperCase();
                });

                // Update the text node with the modified text
                node.nodeValue = capitalizedText;
            } else if (node.nodeType === 1) { // Element node (tag)
                // For element nodes (like <strong>), process the text inside recursively
                $(node).contents().each(function() {
                    processNode(this); // Recurse into child elements
                });
            }
        }
    });

    return $parsedHtml; // Return the modified jQuery object
}





	function applyDisclaimerClasses($parsedHtml) {
		// Loop through all div elements inside $parsedHtml
		$parsedHtml.find('div').each(function() {
			var $div = $(this);
			
			// Check if this div contains any child div elements
			if ($div.find('div').length > 0) {
				// If the div contains any child div elements, skip it
				return;
			}
			
			// Check if any child of this div contains a <strong> tag
			var $strong = $div.find('strong');
			if ($strong.length > 0) {
				// Check if the <strong> tag's text starts with "Disclaimer:"
				if ($strong.text().startsWith('Disclaimer:')) {
					// Add the classes "alert alert-warning" to this div
					$div.addClass('alert alert-warning');
				}
			}
		});
	}
	function applyNoteClasses($parsedHtml) {
		// Loop through all div elements inside $parsedHtml
		$parsedHtml.find('div').each(function() {
			var $div = $(this);
			
			// Check if this div contains any child div elements
			if ($div.find('div').length > 0) {
				// If the div contains any child div elements, skip it
				return;
			}
			
			// Check if any child of this div contains a <strong> tag
			var $strong = $div.find('strong');
			if ($strong.length > 0) {
				// Check if the <strong> tag's text starts with "Disclaimer:"
				if ($strong.text().startsWith('Note:')) {
					// Add the classes "alert alert-warning" to this div
					$div.addClass('alert alert-info');
				}
			}
		});
	}


// Function to add classes to tables
function addTableClasses($parsedHtml) {
    $parsedHtml.find('table').addClass('table table-bordered table-condensed table-hover table-striped');
}

// Function to apply disclaimer classes to divs
function applyDisclaimerClasses($parsedHtml) {
    $parsedHtml.find('div').each(function() {
        var $div = $(this);
        if ($div.find('div').length > 0) return;
        var $strong = $div.find('strong');
        if ($strong.length > 0 && $strong.text().startsWith('Disclaimer:')) {
            $div.addClass('alert alert-warning');
        }
    });
}

// Function to apply note classes to divs
function applyNoteClasses($parsedHtml) {
    $parsedHtml.find('div').each(function() {
        var $div = $(this);
        if ($div.find('div').length > 0) return;
        var $strong = $div.find('strong');
        if ($strong.length > 0 && $strong.text().startsWith('Note:')) {
            $div.addClass('alert alert-info');
        }
    });
}

// Function to add IDs and classes to nested details tags
function addDetailsAttributes($parsedHtml) {
    let level1Count = 1;
    $parsedHtml.find('details').each(function() {
        if ($(this).parents('details').length === 0) {
            $(this).attr('id', 'details-panel' + level1Count).attr('open', '');
            let level2Count = 1;
            $(this).find('> details').each(function() {
                $(this).attr('id', 'details-panel' + level1Count + String.fromCharCode(96 + level2Count))
                       .addClass('expand-collapse-toggle-section');
                level2Count++;
            });
            level1Count++;
        }
    });
}

	// Function to merge repeated <strong> tags
	function mergeRepeatedStrongTags(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/(<strong>)([^<]*)(<\/strong>\s*)+/g, (match, p1, p2) => {
		return p1 + p2.replace(/<\/strong>\s*<strong>/g, ' ') + '</strong>';
	  });
	  return parsedHtmlAsText;
	}

	// Function to merge chained <strong> tags
	function mergeChainedStrongTags(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/(<strong>[^<]*<\/strong>\s*)+/g, (match) => {
		return '<strong>' + match.replace(/<\/strong>\s*<strong>/g, ' ').replace(/<strong>|<\/strong>/g, '') + '</strong>';
	  });
	  return parsedHtmlAsText;
	}

	// Function to merge repeated hyperlinks
	function mergeHyperlinks(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/(<a href="([^"]+)">[^<]*<\/a>\s*)+/g, (match, p1, p2) => {
		let combinedText = match.replace(/<\/a>\s*<a href="[^"]+">/g, ' ');
		return '<a href="' + p2 + '">' + combinedText.replace(/<a href="[^"]+">|<\/a>/g, '') + '</a>';
	  });
	  return parsedHtmlAsText;
	}

	// Function to strip attributes from table-related tags
	function stripTableAttributes(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<(\/?)(table|tr|th|td)[^>]*>/g, '<$1$2>');
	  return parsedHtmlAsText;
	}

	// Function to strip attributes from <p> tags
	function stripPAttributes(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<p[^>]*>/g, '<p>');
	  return parsedHtmlAsText;
	}

	// Function to remove attributes from <ol> and <ul> tags
	function stripListAttributes(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<ol[^>]*>/g, '<ol>').replace(/<ul[^>]*>/g, '<ul>');
	  return parsedHtmlAsText;
	}

	// Function to remove empty <p> tags
	function removeEmptyPTags(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<p>\s* \s*<\/p>/g, '').replace(/<p>\s*<\/p>/g, '');
	  return parsedHtmlAsText;
	}
	function removeNbsp(parsedHtmlAsText)
	{
		return parsedHtmlAsText;
	}

	// Function to replace <br> with closing </p> and opening <p>
	function replaceBr(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<br\s*\/?>/g, (match, offset, string) => {
		const before = string.slice(0, offset);
		const after = string.slice(offset + match.length);
		if (before.match(/<\/?(td|th|tr|table)[^>]*>$/) || after.match(/^<\/?(td|th|tr|table)[^>]*>/)) {
		  return match; // Do not replace <br> inside table-related tags
		}
		return '</p><p>';
	  });
	  return parsedHtmlAsText;
	}

	// Function to wrap tables, add attributes, and include empty <caption> element
	function wrapTables(parsedHtmlAsText) {
	  let tableCount = 0;
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<table>/g, () => {
		tableCount++;
		return `<section id="table${tableCount}"><div class="table-responsive row"><div class="col-md-12"><table border="1" class="table table-bordered table-condensed table-hover table-striped"><caption class="wb-invisible"></caption>`;
	  }).replace(/<\/table>/g, '</table></div></div></section>');
	  return parsedHtmlAsText;
	}

	// Function to perform whitespace cleansing
	function cleanseWhitespace(parsedHtmlAsText) {
	  // Trim whitespace inside elements and add one space outside
	  parsedHtmlAsText = parsedHtmlAsText.replace(/>\s*([^<]*?)\s*</g, (match, p1) => {
		return '> ' + p1.trim() + ' <';
	  });

	  // Ensure only one space between elements
	  parsedHtmlAsText = parsedHtmlAsText.replace(/>\s+</g, '> <');

	  // Handle whitespace around <strong> tags
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<strong>\s*/g, ' <strong>').replace(/\s*<\/strong>/g, '</strong> ');

	  // Remove extra spaces
	  parsedHtmlAsText = parsedHtmlAsText.replace(/\s{2,}/g, ' ');

	  // Remove spaces before periods and commas
	  parsedHtmlAsText = parsedHtmlAsText.replace(/\s+([.,])/g, '$1');

	  // Ensure no space between <li> and <strong> and </strong></li>
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<li>\s*/g, '<li>').replace(/\s*<\/li>/g, '</li>');
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<p>\s*/g, '<p>').replace(/\s*<\/p>/g, '</p>');
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<a>\s*/g, '<a>').replace(/\s*<\/a>/g, '</a>');
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<h([1-6])>\s*/g, '<h$1>').replace(/\s*<\/h([1-6])>/g, '</h$1>');

	  // Ensure no leading space inside <a> tags and one space before
	  parsedHtmlAsText = parsedHtmlAsText.replace(/(\S)\s*<a/g, '$1 <a').replace(/<a\s*([^>]+)>\s*/g, '<a $1>').replace(/\s*<\/a>/g, '</a>');

	  // Ensure no trailing space before punctuation for all elements
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<\/(\w+)>\s+([.,])/g, '</$1>$2');

	  // Handle <strong> tags wrapping punctuation
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<strong>\s*([.,])\s*<\/strong>/g, '<strong>$1</strong> ');

	  return parsedHtmlAsText;
	}

	// Function to handle <strong> tags wrapping punctuation
	function wrapPunctuationInStrong(parsedHtmlAsText) {
	  parsedHtmlAsText = parsedHtmlAsText.replace(/<strong>\s*([.,])\s*<\/strong>/g, '<strong>$1</strong> ');
	  return parsedHtmlAsText;
	}

	// Function to handle whitespace around em dashes and en dashes based on user selection
	function handleDashes(parsedHtmlAsText) 
	{
		const dashToggle = $('#dashToggle').val();
		if (dashToggle === 'add') {
			parsedHtmlAsText = parsedHtmlAsText.replace(/(\S)(—|–)(\S)/g, '$1 $2 $3').replace(/(\s*—\s*)/g, ' — ').replace(/(\s*–\s*)/g, ' – ');
		} else if (dashToggle === 'remove') {
			parsedHtmlAsText = parsedHtmlAsText.replace(/\s*—\s*/g, '—').replace(/\s*–\s*/g, '–');
		}
		return parsedHtmlAsText;
	}

	// Function to move punctuation outside of anchor tags
	function movePunctuationOutsideAnchor(parsedHtmlAsText) {
		parsedHtmlAsText = parsedHtmlAsText.replace(/<a([^>]+)>([^<]+)([.,])<\/a>/g, '<a$1>$2</a>$3');
		return parsedHtmlAsText;
	}
	
	
	
	
	
	
	

// Other functions / Helper functions --------------------------------------------------------------------------


// Wrapper function to handle the process
async function validateInputHtml($parsedText) {
    const wrappedHtml = wrapHtmlStructure($parsedText);
    const validationResults = await validateHtml(wrappedHtml);
    displayValidationResults(validationResults);
}

// Function to wrap input HTML in a valid HTML structure
function wrapHtmlStructure($parsedText) {
    // Ensure the input is wrapped in a full HTML document for validation
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Validation Document</title></head><body>${$parsedText}</body></html>';
}

// Function to validate HTML using the W3C API
async function validateHtml(html) {
    try {
        const response = await fetch('https://validator.w3.org/nu/?out=json', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
            body: html,
        });

        const result = await response.json();

        if (result.messages.length === 0) {
            return 'HTML is valid!';
        } else {
            return result.messages
                .map((msg) => `${msg.type.toUpperCase()}: ${msg.message}`)
                .join('\n');
        }
    } catch (error) {
        throw new Error('Network error: ' + error.message);
    }
}

// Function to display validation results
function displayValidationResults(validationResults) {
    // You can modify this as per your use case
    // Here, assuming there's a div or element with id 'validationResults' to show results
    const validationResultsElement = document.getElementById('validationResults');
    if (validationResultsElement) {
        validationResultsElement.innerText = validationResults;
    } else {
        console.log(validationResults);
    }
}





// Function to walk through the DOM tree and apply a callback to each node
function walkDOM(node, callback) {
    callback(node);
        node = node.firstChild;
        while (node) {
            let nextNode = node.nextSibling;
            walkDOM(node, callback);
            node = nextNode;
        }
    }

// Function to process a single table
function processTable(table) {
    // Preserve the caption element if it exists
    let caption = null;
    if (table.caption) {
        caption = table.caption.cloneNode(true);
    }

    // Get all rows in the table
    const rows = table.getElementsByTagName('tr');

    if (rows.length > 0) {
        // Create <thead> and <tbody> elements
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Process the first row
        const firstRow = rows[0];
        const thCells = [];

        // Convert cells in the first row to <th scope="col">
        for (let cell of firstRow.children) {
            if (cell.tagName.toLowerCase() === 'td' || cell.tagName.toLowerCase() === 'th') {
                const th = document.createElement('th');
                th.setAttribute('scope', 'col');

                // Remove wrapping <p> tags inside the cell content
                let cellContent = cell.innerHTML.trim();
                if (cellContent.startsWith('<p') && cellContent.endsWith('</p>')) {
                    // Create a temporary div to parse the content
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = cellContent;
                    // Extract the content inside the <p> tag
                    cellContent = tempDiv.firstChild.innerHTML;
                }

                th.innerHTML = cellContent;

                // Set class only if it exists
                if (cell.className && cell.className.trim() !== '') {
                    th.className = cell.className;
                }

                // Copy any other attributes except id and class (avoid duplicate ids and empty class)
                for (let attr of cell.attributes) {
                    if (attr.name !== 'id' && attr.name !== 'class') {
                        th.setAttribute(attr.name, attr.value);
                    }
                }
                thCells.push(th);
            }
        }

        // Append th cells to the first row
        firstRow.innerHTML = '';
        for (let th of thCells) {
            firstRow.appendChild(th);
        }

        // Move the first row to thead
        thead.appendChild(firstRow);

        // Move the remaining rows to tbody
        while (rows.length > 0) {
            tbody.appendChild(rows[0]);
        }

        // Clear existing content in the table and append caption, thead, and tbody
        table.innerHTML = '';
        if (caption) {
            table.appendChild(caption);
        }
        table.appendChild(thead);
        table.appendChild(tbody);
    }
}
