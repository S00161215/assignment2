// JavaScript Document
"use strict";


/* Custom data objects passed as teams */
        var customData = {
            teams: [
              [{ name: "Iceland", flag: 'is' }, {name:'England', flag:'england'}],
              [{ name: "France", flag: 'fr' }, { name: "Ireland", flag: 'ie' }],
			  [{ name: "Italy", flag: 'it' }, {name:'Spain', flag:'es'}],
              [{ name: "Germany", flag: 'de' }, { name: "Slovakia", flag: 'sk' }],
			  [{ name: "Belgium", flag: 'be' }, {name:'Hungary', flag:'hu'}],
              [{ name: "Wales", flag: 'wales' }, { name: "N.Ireland", flag: 'england' }],
			  [{ name: "Portugal", flag: 'pt' }, {name:'Croatia', flag:'hr'}],
              [{ name: "Switzerland", flag: 'ch' }, { name: "Poland", flag: 'pl' }]
            ],
            results: []
        };

        /* Edit function is called when team label is clicked */
        function edit_fn(container, data, doneCb) {
            var input = $('<input type="text">');
            input.val(data ? data.flag + ':' + data.name : '');
            container.html(input);
            input.focus();
            input.blur(function () {
                var inputValue = input.val();
                if (inputValue.length === 0) {
                    doneCb(null); // Drop the team and replace with BYE
                } else {
                    var flagAndName = inputValue.split(':'); // Expects correct input
                    doneCb({ flag: flagAndName[0], name: flagAndName[1] });
                }
            });
        }

        
        function render_fn(container, data, score, state) {
            switch (state) {
                case "empty-bye":
                    container.append("No team");
                    return;
                case "empty-tbd":
                    container.append("Upcoming");
                    return;

                case "entry-no-score":
                case "entry-default-win":
                case "entry-complete":
                    container.append('<img src="http://www.aropupu.fi/bracket/site/png/' + data.flag + '.png" /> ').append(data.name);
                    return;
            }
        }

        $(function () {
            $('div #customHandlers .demo').bracket({
                init: customData,
                save: function () { }, /* without save() labels are disabled */
                decorator: {
                    edit: edit_fn,
                    render: render_fn
                }
            });
        });
		
$('#header #logo').mouseover(function(){
		
		console.log('done');
		});
//$(function() {
//  $('div #noSecondaryFinal .demo').bracket({
//    skipSecondaryFinal: true
//    });
//});