/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third',
			config: {
    			compliments: {
        			morning: [
			            'I love you Hannah.',
			            'I hope your day is wonderful!',
			            'How did you sleep?',
			            'Your smile is contagious.',
			            'I swear you light up the room.',
			            'You\'re absolutely beautiful Hannah',
			            'On a scale of 1 to 10, you\'re an 11.',
			            'That color is perfect on you.',
			            'I bet whenever you walk into a room, everyones\' heads snap towards you.'
        			],
			        afternoon: [
			            'Hey cutie.',
			            'You are absolutely stunning',
			            'You take my breath away, every time',
			            'I want my daughter to turn out like you.',
			            'I don\'t think I will ever get used to your smile',
			            'You just keep getting more gorgeous.',
			            'Remember, no matter what happens, I will be here for you.',
			            'You can do anything.',
			            'I think I could have fun in HELL with you.',
			            'I love you.'
			        ],
			        evening: [
			            'Wow... I\'m speechless...',
			            'You look fantastic.',
			            'How was your day?',
			            'The way you smile melts me',
			            'You are more powerful than you know; you are beautiful just as you are.',
			            'Don’t be afraid to speak up for yourself. Keep fighting for your dreams!',
			            'I cant think of any better representation of beauty than the person staring back at you',
			            'I love you Hannah.'
			        ]
			    }
			}
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'New York',
				locationID: '5134086',  //ID from bulk.openweather.org/sample/
				appid: '6c6dfb3129218d86171a3f39b3b4d1b7'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'New York',
				locationID: '5134086',  //ID from bulk.openweather.org/sample/
	            appid: '6c6dfb3129218d86171a3f39b3b4d1b7'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
