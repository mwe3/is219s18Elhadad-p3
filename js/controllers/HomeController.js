app.controller('HomeController', ['$scope', function($scope) {
	$scope.title = 'IMDB + Maryam\'s Top 8 Movies';
      $scope.owner = 'Maryam Elhadad';
      $scope.github = 'https://github.com/mwe3/is219s18Elhadad-p3.git';
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
      {
      title: 'Harry Potter and the Prisoner of Azkaban',
      iscore: 7.8,
      rating: 'PG',
      runtime: 142,
      released: new Date('2004', '06', '04'),
      country: 'United Kingdom',
      posters: ['img/PrisonerofAzkaban1.jpeg', 'img/prisonerofAzkaban2.jpeg'],
      imdb: 'https://www.imdb.com/title/tt0304141/?ref_=nv_sr_4',
      website: 'https://www.warnerbros.com/harry-potter-and-prisoner-azkaban',
      likes: 903,
      dislikes: 102,
      posterindex: 0
      },
      {
      title: 'Harry Potter and the Goblet of Fire',
      iscore: 7.7,
      rating: 'PG-13',
      runtime: 157,
      released: new Date('2005', '11', '18'),
      country: 'United Kingdom',
      posters: ['img/GobletofFire1.jpg', 'img/GobletofFire2.jpg'],
      imdb: 'https://www.imdb.com/title/tt0330373/?ref_=nv_sr_3',
      website: 'https://www.warnerbros.com/harry-potter-and-goblet-fire',
      likes: 952,
      dislikes: 205,
      posterindex: 0
      },
      {
      title: 'Harry Potter and the Half Blood Prince',
      iscore: 7.6,
      rating: 'PG',
      runtime: 153,
      released: new Date('2009', '07', '15'),
      country: 'United Kingdom',
      posters: ['img/halfblood1.jpg', 'img/halfblood2.jpg'],
      imdb: 'https://www.imdb.com/title/tt0417741/',
      website: 'https://www.pottermore.com/collection/harry-potter-half-blood-prince-collection',
      likes: 1243,
      dislikes: 132,
      posterindex: 0
      }
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = 'IMDB + Maryam\'s Top 8 Movies';
      $scope.owner = 'Maryam Elhadad';
      $scope.github = 'https://github.com/mwe3/is219s18Elhadad-p3.git';
	
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	$scope.like = function(index){
            $scope.movies[index].likes +=1;
      };

      $scope.dislike = function(index){
            $scope.movies[index].dislikes += 1;
      };

      $scope.posterClick = function(index){
            $scope.movies[index].posterindex += 1;
            if ($scope.movies[index].posterindex >= $scope.movies[index].posters.length) {
                  $scope.movies[index].posterindex =0;
            }
      };

      $scope.timeText = function(minutes){
            var hours = Math.floor(minutes / 60);
            var mins = minutes % 60;
            var total = hours + "h" + mins
+ "m";
            return total;
      }
	
	
	
	
	
	
	
}]);
