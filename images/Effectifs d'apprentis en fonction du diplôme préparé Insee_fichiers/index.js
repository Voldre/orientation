(function() {
    var CONFIG = {
        /**
         * Configuration generale
         */
        common: {
            /**
             *    "vivochaAccount" is mandatory here
             */
            vivochaAccount: "insee", //ex : "eptica_v6"
            /**
             * URL to the library of the self widget. Mandatory
             * Example : "https//www.website.local/resources/vendors/eptica-self-widget/ept-ss-widget.js"
             * @return string
             */
            selfWidgetJsURL:
                "https://chat.reponse.insee.fr/essm/resources/self-widget/ept-ss-widget.js",

            /**
             * URL to the resources directory of the self widget. Mandatory
             * Do not put any trailing slash at the end.
             * Example : "https//www.website.local/resources/vendors/eptica-self-widget/resources"
             * @return string
             */
            resourceDirURL:
                "https://chat.reponse.insee.fr/essm/resources/self-widget/resources", //ex : "../resources" "https://domaine.com/resourceswidget"

            widget: {
                /**
                 * Type of widget.
                 * @return String
                 * available : halo
                 */
                appearance: "halo",

                /**
                 * URL of the image displayed in the top part of the widget
                 */
                headerLogoURL:
                    "",

                /**
                 * Path to the custom CSS file to load that is under __MAIN__/custom/ directory
                 *
                 * @return String
                 */
                customCSS: "custom1.css",

                /**
                 * Locale to use when
                 * - displaying text to the user;
                 * - searching
                 * "fr_FR" or "fr-FR" are the only notations accepted.
                 * It is used to query Self Service API.
                 *
                 * @return String
                 */
                locale: "fr_FR",
                /*locale: function(){
                 *		return "fr_FR";
                 *	}
                 */
                /**
                 * The maximum number of documents to display
                 *
                 * @return Number
                 */
                maxMostSeenDoc: 3,
                /**
                 * Search feature
                 */
                search: {
                    /**
                     * Minimum inclusive relevance [0;100] for a document to be displayed
                     *
                     * @return Number
                     */
                    minRelevance: 10,

                    /**
                     * Maximum number of document to be displayed in the result view
                     *
                     * @return Number
                     */
                    maxResults: 5
                },

                /**
                 * Escalation feature
                 */
                escalation: {
                    /**
                     * Escalation to a form
                     */
                    form: {
                        /////////////////////////////////////////////////////////////
                        // LKH 2020-02-25 : 
                        // Le bouton formulaire est caché par défaut.
                        // Il est rendu visible lorsqu'une recherche ne retourne aucun résultat
                        // Ou lorsque l'internaute clique sur le bouton "non" quand on lui demande si un article est utile.
                        /////////////////////////////////////////////////////////////
                        //tell if the escalation form is visible
                        enabled: function() {
                            //custom code to show/hide form button
                            // 1. wait until the form button is available
                            // 2. when available, hide the form button
                            // 3. when a certain action is done, show the form button

                            var hideBtn = function() {
                                document.getElementById("eptsw-footer").style.display = 'none';
                            }

                            var showBtn = function() {
                                document.getElementById("eptsw-footer").style.display = 'inline-block';
                            }

                            var showBtnWhenNoResult = function() {
                                var interval2 = setInterval(function(){
                                    var resultPageAppears = getComputedStyle( document.getElementById("eptsw-searchResultView"), null).display !== "none";
                                    var resultItemNb = document.getElementsByClassName("eptsw-searchResultView-resultSection-item").length;
                                    if(resultPageAppears && resultItemNb === 0) {
                                        clearInterval(interval2);
                                        showBtn();
                                    }
                                }, 500);
                            }

                            var onNoVoteClicked = function(cb) {

                                var el = document.getElementById("eptsw");

                                var clickListener = function(e){
                                    var e2 = e || window.event;
                                    var target = e2.target || e2.srcElement;
                                    if(target !== null && target === document.getElementById("eptsw-docView-surveySection-vote-no")) {
                                        cb();
                                    }
                                };

                                if (el.addEventListener) {
                                    el.addEventListener('click', clickListener, false); 
                                } else if (el.attachEvent)  {
                                    el.attachEvent('onclick', clickListener);
                                }
                            }

                            var showBtnWhenAnswerDidntHelp = function() {
                                onNoVoteClicked(function(){
                                    showBtn();
                                });
                            }



                            //wait for the result page to appear with no result (just once) to display the button
                            var showBtnWhenOk = function() {
                                showBtnWhenNoResult();
                                showBtnWhenAnswerDidntHelp();
                            }

                            
                            // waits until the form button is available to hide it once
                            var myInterval = setInterval(function(){
                                var found = document.getElementById("eptsw-footer") !== null;
                                if(found) {
                                    clearInterval(myInterval);
                                    hideBtn();
                                    showBtnWhenOk();
                                }
                            }, 500);



                            

                            return true;//default value
                        },

                        /**
                         * The href attribute of a html link <a/>
                         *
                         * @return String
                         */
                        href: "/fr/information/1912226",

                        /**
                         * The target attribute of a html link <a/>
                         *
                         * @return String
                         */
                        target: ""
                    },
                    /**
                     * Escalation to vivocha
                     */
                    chat: {
                        /**
                         * Tell if the form escalation is visible
                         *
                         * @return Boolean
                         */
                        enabled: true
                    }
                },

                rankDocument: {
                    yesValue: 2,
                    noValue: 1
                },

                labels: {
                    /* name of the appearance */
                    halo: {
                        fr_FR: {
                            header: {
                                title: "Besoin d'aide ?",
                                logoImgTitle: "Logo",
                                closeImgTitle: "Fermer le widget"
                            },
                            footer: {
                                escalationSection: {
                                    title: "Nous contacter",
                                    chat: "Commencer un chat",
                                    sendForm: "Formulaires de contact"
                                }
                            },
                            rootView: {
                                searchBarSection: {
                                    searchBtn: ".",
                                    searchInputPlaceholder:
                                        "Que cherchez-vous ?"
                                },
                                docListSection: {
                                    title: "Questions les plus fréquentes"
                                }
                            },
                            searchResultView: {
                                back: "<<retour",
                                searchBarSection: {
                                    searchBtn: ".",
                                    searchInputPlaceholder:
                                        "Que cherchez-vous ?"
                                },
                                resultSection: {
                                    title: "Résultats de la recherche",
                                    noResult: "Aucun résultat."
                                }
                            },
                            docView: {
                                back: "<<retour",
                                docSection: {
                                    attachmentListTitle: "Pièces jointes"
                                },
                                surveySection: {
                                    title: "Cette réponse vous a-t-elle aidé ?",
                                    vote: {
                                        yes: "Oui",
                                        no: "Non"
                                    },
                                    afterVote: {
                                        yes: "Merci pour votre retour",
                                        no: "Merci pour votre retour"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        /**
         * Configurations specifiques
         * Reutilise les parametres common par defaut si non definis en specifique
         */
        instanceConfigList: [
            ///////////////////////
            //config 1 / Page accueil
            ///////////////////////
            {
                /**
                 * Is this configuration authorized ?
                 *
                 * @return Boolean
                 */
                enabled: true,

                /**
                 * URL to the Self Service sub-configuration
                 *
                 * @return String
                 */
                selfServiceConfigURL:
                    "https://chat.reponse.insee.fr/essm/api/configuration/accueil",

                /**
                 * Display logs in console
                 *
                 * @return Boolean
                 */
                debug: true,

                /**
                 * Different number of articles
                 *
                 * @return Boolean
                 */

                maxMostSeenDoc: 1,

                /**
                 * All rules must be true in order for the widget to appear.
                 * If one required is undefined or empty, it is considered as true.
                 */
                engagementRules: {
                    /**
                     * If empty, this parameter is ignored.
                     * If not empty, one of the listed URL must match (using "starts with" or "regex") the web page
                     * in order for the widget to be displayed.
                     * example : urlList:["https://alcapone.com", ".*path.*"]
                     * @return List of Strings
                     */
                    urlList: [
                        "https://www.insee.fr/fr/accueil",
                        "https://www.insee.fr/accueil",
                        "https://insee.fr/fr/accueil",
                        "https://insee.fr/accueil"
                    ],

                    /**
                     * Advanced mode
                     * Tell if the widget is diplayable. Put your custom code here.
                     *
                     * @param Function(Boolean) callback to call when finished. Set
                     *        the parameter of the callback to a boolean indicating whether
                     *        the the widget is allowed to be displayed.
                     *
                     * @return undefined
                     */
                    //cbCustomRule: function(_cb){ _cb(true); }
                    cbCustomRule: function(_cb) {
                        //wait 0 millisecond before showing the widget
                        setTimeout(function() {
                            _cb(true);
                        }, 0);
                    }
                }
            },
            ///////////////////////
            //config 1 bis / Page info
            ///////////////////////
            {
                /**
                 * Is this configuration authorized ?
                 *
                 * @return Boolean
                 */
                enabled: true,

                /**
                 * URL to the Self Service sub-configuration
                 *
                 * @return String
                 */
                selfServiceConfigURL:
                    "https://chat.reponse.insee.fr/essm/api/configuration/info",

                /**
                 * Display logs in console
                 *
                 * @return Boolean
                 */
                debug: true,

                /**
                 * Different number of articles
                 *
                 * @return Boolean
                 */

                maxMostSeenDoc: 1,

                /**
                 * All rules must be true in order for the widget to appear.
                 * If one required is undefined or empty, it is considered as true.
                 */
                engagementRules: {
                    /**
                     * If empty, this parameter is ignored.
                     * If not empty, one of the listed URL must match (using "starts with" or "regex") the web page
                     * in order for the widget to be displayed.
                     * example : urlList:["https://alcapone.com", ".*path.*"]
                     * @return List of Strings
                     */
                    urlList: [
                        "https://www.insee.fr/fr/information"
                    ],

                    /**
                     * Advanced mode
                     * Tell if the widget is diplayable. Put your custom code here.
                     *
                     * @param Function(Boolean) callback to call when finished. Set
                     *        the parameter of the callback to a boolean indicating whether
                     *        the the widget is allowed to be displayed.
                     *
                     * @return undefined
                     */
                    //cbCustomRule: function(_cb){ _cb(true); }
                    cbCustomRule: function(_cb) {
                        //wait 0 millisecond before showing the widget
                        setTimeout(function() {
                            _cb(true);
                        }, 0);
                    }
                }
            },

            ///////////////////////
            //config 2 statistiques
            ///////////////////////
            {
                /**
                 * Is this configuration authorized ?
                 *
                 * @return Boolean
                 */
                enabled: false,

                /**
                 * URL to the Self Service sub-configuration
                 *
                 * @return String
                 */
                selfServiceConfigURL:
                    "https://chat.reponse.insee.fr/essm/api/configuration/statistiques",

                /**
                 * Display logs in console
                 *
                 * @return Boolean
                 */
                debug: true,

                /**
                 * Different number of articles
                 *
                 * @return Boolean
                 */

                maxMostSeenDoc: 2,

                /**
                 * All rules must be true in order for the widget to appear.
                 * If one required is undefined or empty, it is considered as true.
                 */
                engagementRules: {
                    /**
                     * If empty, this parameter is ignored.
                     * If not empty, one of the listed URL must match (using "starts with" or "regex") the web page
                     * in order for the widget to be displayed.
                     * example : urlList:["https://alcapone.com", ".*path.*"]
                     * @return List of Strings
                     */
                    urlList: [
                        "https://www.insee.fr/fr/statistiques"
                    ],

                    /**
                     * Advanced mode
                     * Tell if the widget is diplayable. Put your custom code here.
                     *
                     * @param Function(Boolean) callback to call when finished. Set
                     *        the parameter of the callback to a boolean indicating whether
                     *        the the widget is allowed to be displayed.
                     *
                     * @return undefined
                     */
                    //cbCustomRule: function(_cb){ _cb(true); }
                    cbCustomRule: function(_cb) {
                        //wait 0 millisecond before showing the widget
                        setTimeout(function() {
                            _cb(true);
                        }, 0);
                    }
                }
            },

            ///////////////////////
            //config 3  Coleman
            ///////////////////////

            {
                /**
                 * Is this configuration authorized ?
                 *
                 * @return Boolean
                 */
                enabled: false,

                /**
                 * URL to the Self Service sub-configuration
                 *
                 * @return String
                 */
                selfServiceConfigURL:
                    "https://chat.reponse.insee.fr/essm/api/configuration/coleman",

                /**
                 * Display logs in console
                 *
                 * @return Boolean
                 */
                debug: true,

                /**
                 * Different number of articles
                 *
                 * @return Boolean
                 */

                maxMostSeenDoc: 1,

                /**
                 * All rules must be true in order for the widget to appear.
                 * If one required is undefined or empty, it is considered as true.
                 */
                engagementRules: {
                    /**
                     * If empty, this parameter is ignored.
                     * If not empty, one of the listed URL must match (using "starts with" or "regex") the web page
                     * in order for the widget to be displayed.
                     * example : urlList:["https://alcapone.com", ".*path.*"]
                     * @return List of Strings
                     */
                    urlList: ["http://qfcolempublht02.ad.insee.intra/fpe"],

                    /**
                     * Advanced mode
                     * Tell if the widget is diplayable. Put your custom code here.
                     *
                     * @param Function(Boolean) callback to call when finished. Set
                     *        the parameter of the callback to a boolean indicating whether
                     *        the the widget is allowed to be displayed.
                     *
                     * @return undefined
                     */
                    //cbCustomRule: function(_cb){ _cb(true); }
                    cbCustomRule: function(_cb) {
                        //wait 0 millisecond before showing the widget
                        setTimeout(function() {
                            _cb(true);
                        }, 0);
                    }
                }
            }
        ]
    };

    //load JS script
    var scriptEl = document.createElement("script");
    scriptEl.setAttribute("type", "text/javascript");
    scriptEl.setAttribute("src", CONFIG.common.selfWidgetJsURL);
    document.getElementsByTagName("body")[0].appendChild(scriptEl);

    //ask every 100ms if the script has loaded
    var whenAvailable = function(n, e, t, a) {
        "function" == typeof t && ((a = t), (t = 100));
        var i = setInterval(function() {
            void 0 !== n[e] && (clearInterval(i), a());
        }, t);
    };

    whenAvailable(window, "SelfServiceWidget", function() {
        //start the self service widget
        new SelfServiceWidget(CONFIG);
    });
})();
