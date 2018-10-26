var surveyJSON = 
{
    locale: "pl",
    completedHtml: {
     pl: "<h4 class=\"w3-padding-32\">Dziękujemy za wypełnienie ankiety!</h3>",
     en: "<h3 class=\"w3-padding-32\">Thanks for completing this survey!</h3>"
    },
    pages: [
     {
      name: "Dane osobowe",
      elements: [
       {
        type: "dropdown",
        name: "Agreement",
        title: {
         pl: "Wyrażam zgodę na przetwarzanie danych osobowych przez Robert Bosch Polska w celu i zakresie niezbędnym w procesie analizy wyników niniejszej ankiety.",
         en: "I agree to usage of my personal data by Robert Bosch Polska in order to evaluate this survey results."
        },
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: {
           pl: "Tak"
          }
         },
         {
          value: "No, I would like to conttinue anonymously",
          text: {
           pl: "Nie, chcę wypełnić ankietę anonimowo"
          }
         }
        ]
       },
       {
        type: "text",
        name: "FirstNameLastName",
        title: {
         pl: "Imię i nazwisko",
         en: "First and Last name"
        },
        enableIf: "{Agreement} = \"Yes\"",
        isRequired: true
       },
       {
        type: "text",
        name: "Department",
        title: {
         pl: "Nazwa działu",
         en: "Department"
        },
        enableIf: "{Agreement} = \"Yes\"",
        isRequired: true
       }
      ],
      title: {
       pl: "Dane osobowe",
       en: "Personal Data"
      }
     },
     {
      name: "Ankieta",
      elements: [
       {
        type: "dropdown",
        name: "TimeOfTravel",
        title: {
         pl: "Ile czasu dziennie zajmują Ci dojazdy do pracy?",
         en: "How much time do you need daily to reach the office?"
        },
        isRequired: true,
        choices: [
         {
          value: "LessThanHour",
          text: {
           pl: "Mniej niż godzinę",
           en: "Less than an hour"
          }
         },
         {
          value: "BetweenOneAndTwoHours",
          text: {
           pl: "Od jednej do dwóch godzin",
           en: "Between one and two hours"
          }
         },
         {
          value: "MoreThanTwoHours",
          text: {
           pl: "Więcej niż dwie godziny",
           en: "More than two hours"
          }
         },
         {
          value: "HardToSay",
          text: {
           pl: "Trudno powiedzieć",
           en: "Hard to say"
          }
         }
        ]
       },
       {
        type: "dropdown",
        name: "AreYouUsingPublicTransportation",
        title: {
         pl: "Czy dojeżdżasz do pracy korzystając z komunikacji miejskiej?",
         en: "Are you using public transportation on your way to work?"
        },
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: {
           pl: "TAK",
           en: "YES"
          }
         },
         {
          value: "No",
          text: {
           pl: "NIE",
           en: "NO"
          }
         },
         {
          value: "NoBut",
          text: {
           pl: "NIE, ale dojeżdzałbym/dojeżdżałabym gdyby...",
           en: "NO, but I would if..."
          }
         }
        ]
       },
       {
        type: "text",
        name: "WhatWouldConvinceYouToUsePublicTransportation",
        visibleIf: "{AreYouUsingPublicTransportation} = \"NoBut\"",
        title: {
         pl: "Co skłoniłoby Cię do używania komunikacji miejskiej?",
         en: "What would convince you to use public transportation?"
        },
        isRequired: true,
        placeHolder: "Latające pociągi, teleportacja, itp..."
       },
       {
        type: "checkbox",
        name: "CommonicationOptions",
        visibleIf: "{AreYouUsingPublicTransportation} = \"Yes\" or {AreYouUsingPublicTransportation} = \"NoBut\"",
        title: {
         pl: "Jakich środków komunikacji miejskiej używasz lub używałbyś/używałabyś dojeżdżając do pracy?",
         en: "What kind of public transportation do you use or would use on your way to work?"
        },
        isRequired: true,
        choices: [
         {
          value: "ZTM_WKD",
          text: {
           pl: "ZTM (z WKD włącznie)",
           en: "ZTM (including WKD)"
          }
         },
         {
          value: "KM",
          text: {
           pl: "Koleje Mazowieckie",
           en: "Koleje Mazowieckie"
          }
         },
         {
          value: "PKP",
          text: {
           pl: "PKP",
           en: "PKP"
          }
         },
         {
          value: "OTHERS",
          text: {
           pl: "Inne...",
           en: "Others..."
          }
         }
        ]
       },
       {
        type: "text",
        name: "OtherCommunicationOptions",
        visibleIf: "{CommonicationOptions} contains \"OTHERS\"",
        isRequired: true,
        titleLocation: "hidden",
        placeHolder: {
         pl: "Podaj 'inne' środki komunikacji...",
         en: "Specify 'Others'..."
        }
       },
       {
        type: "dropdown",
        name: "AreyInterestedInBenefit",
        visibleIf: "{AreYouUsingPublicTransportation} = \"Yes\" or {AreYouUsingPublicTransportation} = \"NoBut\"",
        title: {
         pl: "Czy byłbyś/byłabyś zainteresowana dopłatą do biletów komunikacji miejskiej?",
         en: "Are you or would you be interested in having public transportation tickets partially refunded?"
        },
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: {
           pl: "TAK",
           en: "YES"
          }
         },
         {
          value: "No",
          text: {
           pl: "NIE",
           en: "NO"
          }
         }
        ]
       },
       {
        type: "comment",
        name: "question1",
        visibleIf: "{AreyInterestedInBenefit} = \"No\"",
        title: {
         pl: "BenefitComment"
        },
        titleLocation: "hidden",
        rows: 3,
        placeHolder: {
         pl: "Nie interesuje mnie taki benefit ponieważ, ...",
         en: "I am not interested in such benefit because, ..."
        }
       }
      ],
      title: {
       pl: "Personal data",
       en: "Survey"
      }
     }
    ],
    cookieName: "surveySessionId",
    showPageTitles: false,
    startSurveyText: {
     pl: "Rozpocznij",
     en: "Start"
    },
    pagePrevText: {
     pl: "Wstecz",
     en: "Back"
    },
    pageNextText: {
     pl: "Dalej",
     en: "Next"
    },
    completeText: {
     pl: "Gotowe!",
     en: "Done!"
    }
   }