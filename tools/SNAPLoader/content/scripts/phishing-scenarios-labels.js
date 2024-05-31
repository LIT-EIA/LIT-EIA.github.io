define(['utils'], function (Utils) {
	'use strict';
  
	var labels = {
		"game": {
      "email": (Utils.lang === "en")?	
					"E-mail" :
					"Courriel",
			"emailOf": (Utils.lang === "en")?	
					"of" :
					"de",
			"sectionTitlePoints": (Utils.lang === "en")?	
          "Points" :
          "Points",
			"sectionTitleButtons": (Utils.lang === "en")?	
          "Buttons" :
          "Boutons",
			"sampleLinkAria": (Utils.lang === "en")?	
          "(This is a sample link, the label is &ldquo;{{linkLabel}}&rdquo; and the target is &ldquo;{{linkHref}}&rdquo;)" :
          "(Ceci est un exemple d’hyperlien. Le texte affiché est «&nbsp;{{linkLabel}}&nbsp;» et le lien derrière est «&nbsp;{{linkHref}}&nbsp;».",
    }, "identifyType": {
      "instructions":  (Utils.lang === "en")?	
        "Decide if the following email is a phishing attempt or if it’s safe and click on the appropriate button (<strong>&ldquo;Report this E-mail&rdquo;</strong> or <strong>&ldquo;Safe&rdquo;</strong>)." :
        "Déterminez si le courriel est une tentative d’hameçonnage ou s’il est sécuritaire, puis cliquez sur le bouton approprié («&nbsp;<strong>Signalez ce courriel</strong>&nbsp;» ou «&nbsp;<strong>Sécuritaire</strong>&nbsp;»)",
			"labelReportThisEmail": (Utils.lang === "en")?	
          "Report this E-mail" :
          "Signalez ce courriel",
			"labelSafe": (Utils.lang === "en")?	
          "Safe" :
          "Sécuritaire"
          
    }, "identifyClues" : {
      "instructions":  (Utils.lang === "en")?		
          "Find and click three (3) clues that prove this is a phishing attempt. You have five (5) attempts to find the three clues." :
          "Trouvez trois (3) indices et cliquez sur ceux-ci pour confirmer qu’il s’agit bel et bien d’une tentative d’hameçonnage. Vous avez droit à cinq (5) tentatives pour trouver les trois indices.",
      "feedbackNextEmailButton":  (Utils.lang === "en")?		
          "Click the <strong>Next E-mail</strong> button to continue." :
          "Cliquez sur le bouton <strong>Courriel suivant</strong> pour continuer.",
      "feedbackResultsButton":  (Utils.lang === "en")?		
          "Click the <strong>Results</strong> button to continue." :
          "Cliquez sur le bouton <strong>Résultats</strong> pour continuer.",
      "feedbackNoMoreAttempts":  (Utils.lang === "en")?		
          "You are out of attempts." :
          "Vous n’avez plus de tentatives.",
      "feedbackFoundThreeClues":  (Utils.lang === "en")?		
          "You have successfully identified three (3) clues." :
          "Vous avez identifié avec succès les trois (3) indices.",
			"sectionTitleClues": (Utils.lang === "en")?	
          "Clues" :
          "Indices",
			"labelNextEmail": (Utils.lang === "en")?	
          "Next E-mail" :
          "Courriel suivant",
			"firstM": (Utils.lang === "en")?	
          "First" :
          "Première",
			"firstF": (Utils.lang === "en")?	
          "First" :
          "Première",
			"second": (Utils.lang === "en")?	
          "Second" :
          "Deuxième",
			"third": (Utils.lang === "en")?	
          "Third" :
          "Troisième",
			"fourth": (Utils.lang === "en")?	
          "Fourth" :
          "Quatrième",
			"fifth": (Utils.lang === "en")?	
          "Fifth" :
          "Cinquième",
			"guess": (Utils.lang === "en")?	
          "guess" :
          "tentative",
			"notAttempted": (Utils.lang === "en")?	
          "not attempted" :
          "pas essayée",
			"successfulGuess": (Utils.lang === "en")?	
          "success" :
          "réussi",
			"unsuccessfulGuess": (Utils.lang === "en")?	
          "miss" :
          "pas réussi",
			"clue": (Utils.lang === "en")?	
          "clue" :
          "indice",
			"clueNotFound": (Utils.lang === "en")?	
          "not found" :
          "non trouvé",
			"clueFound": (Utils.lang === "en")?	
          "found" :
          "trouvé"
    }, "feedback": {
			"labelContinue": (Utils.lang === "en")?	
          "Continue" :
          "Continuer",
			"labelBack": (Utils.lang === "en")?	
          "Back" :
          "Retour",
			"labelCorrect": (Utils.lang === "en")?	
          "Correct!" :
          "Exact!",
			"labelIncorrect": (Utils.lang === "en")?	
          "Incorrect." :
          "C'est inexact.",
			"labelResults": (Utils.lang === "en")?	
          "Results" :
          "Résultats"
    }, "results": {
			"sectionTitleResults": (Utils.lang === "en")?	
          "Results" :
          "Résultats",
			"sectionTitleResult": (Utils.lang === "en")?	
          "Result" :
          "Résultats",
			"congratulationsMessage": (Utils.lang === "en")?	
          "Congratulations, Defender! You completed your mission." :
          "Félicitations, défenseur! Vous avez accompli votre mission.",
			"labelRetry": (Utils.lang === "en")?	
          "Retry" :
          "Essayer de nouveau",
			"labelEmails": (Utils.lang === "en")?	
          "Emails" :
          "Courriels",
			"labelClues": (Utils.lang === "en")?	
          "Clues" :
          "Indices",
			"labelBonus": (Utils.lang === "en")?	
          "Bonus" :
          "Primes",
			"labelTotal": (Utils.lang === "en")?	
          "Total" :
          "Total",
			"unitPoints": (Utils.lang === "en")?	
          '<abbr title="Points">Pts</abbr>' :
          '<abbr title="Points">Pts</abbr>',
			"result0to2": (Utils.lang === "en")?	
          "Keep trying!" :
          "Bel essai!",
			"result3": (Utils.lang === "en")?	
          "Good job!" :
          "Bon travail!",
			"result4": (Utils.lang === "en")?	
          "Amazing!" :
          "Super!",
			"result5": (Utils.lang === "en")?	
          "Perfect!" :
          "Parfait!",
			"resultNextLevel": (Utils.lang === "en")?	
          "You are ready for the next level!" :
          "Vous êtes prêt pour le prochain niveau!",
			"labelNext": (Utils.lang === "en")?	
          "Next" :
          "Suivant"
    }
  };
	
  return labels;
});