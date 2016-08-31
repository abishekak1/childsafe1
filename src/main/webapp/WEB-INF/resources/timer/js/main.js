// (function($){
//     $.fn.scrollingTo = function( opts ) {
//         var defaults = {
//             animationTime : 1000,
//             easing : '',
//             callbackBeforeTransition : function(){},
//             callbackAfterTransition : function(){}
//         };
//
//         var config = $.extend( {}, defaults, opts );
//
//         $(this).click(function(e){
//             var eventVal = e;
//             e.preventDefault();
//
//             var $section = $(document).find( $(this).data('section') );
//             if ( $section.length < 1 ) {
//                 return false;
//             };
//
//             if ( $('html, body').is(':animated') ) {
//                 $('html, body').stop( true, true );
//             };
//
//             var scrollPos = $section.offset().top;
//
//             if ( $(window).scrollTop() == scrollPos ) {
//                 return false;
//             };
//
//             config.callbackBeforeTransition(eventVal, $section);
//
//             $('html, body').animate({
//                 'scrollTop' : (scrollPos+'px' )
//             }, config.animationTime, config.easing, function(){
//                 config.callbackAfterTransition(eventVal, $section);
//             });
//         });
//     };
// }(jQuery));

//
// jQuery(document).ready(function () {
//     "use strict";
//     new WOW().init();
//
//
//     (function () {
//         jQuery('.smooth-scroll').scrollingTo();
//     }());
//
// });
//


$(document).ready(function(){

    var options = {
        valueNames: [ 'name','suburb','born' ]
    };

     var userList = new List('users', options);


    $('li.dropdown').click(function() {
        $('li.dropdown').not(this).find('p').hide();
        $(this).find('p').toggle();
    });


    $( function() {
        var availableTags = [
            'CARLTON',
            'CARLTON NORTH',
            'DOCKLANDS',
            'EAST MELBOURNE',
            'FLEMINGTON',
            'MELBOURNE(CENTRAL BUSINESS DISTRICT)',
            'MELBOURNE(ST KILDA ROAD AREA)',
            'NORTH MELBOURNE',
            'PARKVILE',
            'PORT MELBOURNE',
            'SOUTHBANK',
            'SOUTH WHARF',
            'SOUTH YARRA',
            'WEST MELBOURNE',
            'ALBERT PARK',
            'BALACLAVA',
            'ELWOOD',
            'MELBOURNE(ST KILDA ROAD AREA)',
            'MIDDLE PARK',
            'PORT MELBOURNE',
            'RIPPONLEA',
            'ST KILDA',
            'ST KILDA EAST',
            'ST KILDA WEST',
            'SOUTHBANK',
            'SOUTH MELBOURNE',
            'SOUTH WHARF',
            'ABBOTSFORD',
            'ALPHINGTON',
            'BURNELY',
            'CARLTON NORTH',
            'CLIFTON HILL',
            'COLLINGWOOD',
            'CREMORNE',
            'FAIRFIELD',
            'FITZROY',
            'FITZROY NORTH',
            'PRINCES HILL',
            'RICHMOND',
            'BELIFIELD',
            'BRIAR HILL',
            'BUNDOORA',
            'EAGLEMONT',
            'ETHAM',
            'ETHAM NORTH',
            'GREENBOROUGH',
            'HEIDELBERG',
            'HEIDELBERG HEIGHTS',
            'HEIDELBERG WEST',
            'IVANHOE',
            'IVANHOE EAST',
            'LOWER PLENTY',
            'MACLEOD',
            'MONTMORENCY',
            'ROSANNA',
            'ST HELENA',
            'VIEWBANK',
            'WARSONIA',
            'WARSONIA NORTH',
            'YALLAMBIE',
            'ALPHINGTON',
            'BUNDOORA',
            'FAIRFIELD',
            'KINGSBURY',
            'MACLEOD',
            'NORTHCOTE',
            'PERSTON',
            'RESERVOIR',
            'THORNBURY',
            'ATTWOOD',
            'BROADMEADOWS',
            'CAMPBELIFIELD',
            'COOLAROO',
            'CRAIGIEBURN',
            'DALLAS',
            'GLADSTONE PARK',
            'GREENVALE',
            'JACANA',
            'KEILOR',
            'MEADOW HEIGHTS',
            'MELBOURNE AIRPORT',
            'ROXBURGH PARK',
            'SOMERTON',
            'TULLAMARINE',
            'WESTMEADOWS',
            'SUNBURY',
            'BULLA',
            'CLARKEFIELD',
            'DIGGERS REST',
            'KALKALLO',
            'MICKLEHAM',
            'OAKLANDS JUNCTION',
            'WILDWOOD',
            'YUROKE',
            'ABERFELDIE',
            'AIRPORT WEST',
            'ASCOT VALE',
            'AVONDALE HEIGHTS',
            'ESSENDON',
            'ESSENDON FIELDS',
            'ESSENDON NORTH',
            'ESSENDON WEST',
            'FLEMINGTON',
            'KEILOR EAST',
            'MOONEE PONDS',
            'NIDDRIE',
            'STRATHMORE HEIGHTS',
            'TRAVANCORE',
            'BRUNSWICK',
            'BRUNSWICK EAST',
            'BRUNSWICK WEST',
            'COBURG',
            'COBURG NORTH',
            'FAWKNER',
            'GLENROY',
            'GOWANBRAE',
            'HADFIELD',
            'OAK PARK',
            'PASCOE VALE',
            'PASCOE VALE SOUTH',
            'TULLAMARINE',
            'DIMOND CREEK',
            'ELTHAM',
            'ETHAM NORTH',
            'GREENSBOROUGH',
            'HURSTBRIDGE',
            'NORTH WARRANDYTE',
            'RESEARCH',
            'WATTLE GLEN',
            'BEND OF ISLANDS',
            'CHRISTMAS HILLS',
            'COTTLES BRIDGE',
            'DOREEN',
            'KANGAROO GROUND',
            'KINGLAKE',
            'KINGLAKE WEST',
            'NUTFIELD',
            'PANTON HILL',
            'PLENTY',
            'ST ANDREWS',
            'SIMITHS GULLY',
            'STRATHEWEN',
            'WATSON CREEK',
            'TAN YEAN',
            'YARRAMBAT',
            'BUNDOORA',
            'DOREEN',
            'EPPING',
            'LALOR',
            'MERNDA',
            'MILL PARK',
            'SOUTH MORANG',
            'THOMASTOWN',
            'BEVERIDGE',
            'DONNYBROOK',
            'EDEN PARK',
            'KINGLAKE WEST',
            'WHITTLESEA',
            'WOLLERT',
            'WOODSTOCK',
            'YAN YEAN',
            'ASHBURTON',
            'BALWYN',
            'BALWYN NORTH',
            'CAMBERWELL',
            'CANTERBURY',
            'DEEPDENE',
            'GLEN IRIS',
            'HAWTHORN',
            'HAWTHORM EAST',
            'KEW',
            'KEW EAST',
            'MONT ALBERT',
            'MONT ALBERT NORTH',
            'SURREY HILLS',
            'BAYSWATER',
            'BORONIA',
            'FERNTREE GULLY',
            'KNOXFIELD',
            'LYSTERFIELD',
            'ROWVILLE',
            'SCORESBY',
            'THE BASIN',
            'WANTIRNA',
            'WANTIRNA SOUTH',
            'BULLEN',
            'DONCASTER',
            'DONCASTER EAST',
            'DONVALE',
            'PARK ORCHARDS',
            'TEMPLESTOWE',
            'TEMPLESTOWE LOWER',
            'WARRANDYTE',
            'WATTANDYTE SOUTH',
            'WONGA PARK',
            'NUNAWADING',
            'RINGWOOD NORTH',
            'BAYSWATER NORTH',
            'CROYDON',
            'CROYDON HILLS',
            'DROYDON NORTH',
            'CROYDON SOUTH',
            'HEATHMONT',
            'KILSYTH SOUTH',
            'RINGWOOD ',
            'RINGWOOD EAST',
            'RINGWOOD NORTH',
            'WARRANWOOD',
            'BLACKBURN NORTH',
            'BLACKBURN SOUTH',
            'BOX HILL',
            'BOX HILL NORTH',
            'BOX HILL SOUTH',
            'BURWOOD',
            'BURWOOD EAST',
            'FOREST HILL',
            'MITCHAM',
            'MONT ALBERT',
            'NUNAWADING',
            'SURREY HILLS',
            'VERMONT ',
            'VERMONT SOUTH',
            'BELGRAVE',
            'BELGRAVE HEIGHTS',
            'BELGRAVE SOUTH',
            'CHIRNSIDE PARK03116',
            'KILSYTH',
            'LILYDALE',
            'MONTROSE',
            'MOOROOLBARK',
            'MOUNT EVELYN',
            'SELBY',
            'TECOMA',
            'UPPER FERNTREE GULLY',
            'UPWEY',
            'BADGER CREEK',
            'BEENAK',
            'BIG PATS CREEK',
            'CAMBARBILLE',
            'CHUM CRDDK',
            'COLDSTREAM',
            'CIXONS CREEK',
            'DON VALLEY',
            'FERNSHAW',
            'FERNY CREEK',
            'GILDEROY',
            'GLADYSDALE',
            'GRUYERE',
            'HEALESVILLE',
            'HODDIES CREEK',
            'KALLISTA',
            'KALORAMA',
            'LAUNCHING PLACE',
            'LYSTERFIELD',
            'MACCLESFIELD',
            'MCMAHONS CREEK',
            'MATLOCK',
            'MENZIES CREEK',
            'MILLGROVE',
            'MONBULK',
            'MOUNT DANDENONG',
            'MOUNT TOLLEBEWONG',
            'NARRE WARREN EAST',
            'OLINDA',
            'POWELLTOWN',
            'REEFTON',
            'SASSAFRAS',
            'SEVILLE',
            'SHERBROOKE',
            'SILVAN',
            'STEELS CREEK',
            'TARRAWARRA',
            'THE PATCH',
            'THREE BRIDGES',
            'TOORONGO',
            'TREMONT',
            'WANDIN EAST',
            'WANDIN NORTH',
            'WARBURTON',
            'WARBURTON EAST',
            'WESBURN',
            'WOORI YALLOCK',
            'YARRA GLEN',
            'YARRA JUNCTION',
            'YELLINGBO',
            'YERING ',
            'BEAUMARIS',
            'BLACK ROCK',
            'BRIGHTON',
            'BRIGHTON EAST',
            'CHELTENHAM',
            'GARDENVALE',
            'HAMPTON',
            'HAMPTON EAST',
            'SANDRINGHAM',
            'MOORABBIN',
            'BEACONSFIELD',
            'OFFICER',
            'PAKENHAM',
            'AVONSLEIGH',
            'BAYLES',
            'BEACONSFIELD UPPER',
            'BUNYIP',
            'BUNYIP NORTH',
            'CALDERMEADE',
            'CARDINIA',
            'CATANI',
            'CLEMATIS',
            'COCKATOO',
            'CORA LYNN',
            'DALMORE',
            'DEWHURST',
            'EMERALD',
            'GARFIELD',
            'GARFIELD NORTH',
            'GEMBROOK',
            'GUYS HILL',
            'HEALTH HILL',
            'IONA',
            'KOO WEE RUP',
            'KOO WEE RUP NORTH',
            'LANG LANG',
            'LANG LANG EAST',
            'LONGWARRY',
            'MARYKNOLL',
            'MENZIES CREEK',
            'MODELLA',
            'MONOMEITH',
            'MOUNT BURNETT',
            'NANGANA',
            'NAR NAR GOON',
            'NAR NAR GOON NORTH',
            'NYORA',
            'OFFICER SOUTH',
            'PAKENHAM SOUTH',
            'PAKENHAM UPPER',
            'RYTHDALE',
            'TONIMBUK',
            'TOORADIN NORTH',
            'TYNONG',
            'TYNONG NORTH',
            'VERVALE',
            'YANNATHAN',
            'BERWICK',
            'BOTANIC RIDGE',
            'CRANBOURNE',
            'CRANBOURNE EAST',
            'CRANBOURNE NORTH',
            'CRANBOURNE WEST',
            'CRANBOURNE SOUTH',
            'DOVETON',
            'ENDEAVOUR HILLS',
            'EUMEMMERRING',
            'HALLAM',
            'HAMPTON PARK',
            'JUNCTION VILLAGE',
            'LYNBROOK',
            'NARRE WARREN',
            'NARRE WARREN NORTH',
            'NARRE WARREN SOUTH',
            'BLIND BIGHT',
            'CANNONS CREEK',
            'CLYDE',
            'CLYDE NORTH',
            'DEVON MEADOWS',
            'HARKAWAY',
            'LYSTERFIELD SOUTH',
            'PEARCEDALE',
            'TOORADIN NORTH',
            'WARNEET',
            'DANDENONG',
            'DANDENONG NORTH',
            'DANDENONG SOUTH',
            'KEYSBOROUGH',
            'NOBLE PARK',
            'NOBLE PARK NORTH',
            'SPRINGVALE',
            'SPRINGVALE SOUTH',
            'LYNDHURST',
            'BANGHOLME',
            'CARRUM DOWNS',
            'FRANKSTON',
            'FRANKSTON NORTH',
            'FRANKSTON SOUTH',
            'LANGWARRIN',
            'SANDHURST',
            'SEAFORD',
            'SKYE',
            'LANGWARRIN SOUTH',
            'BENTLEIGH',
            'BENTLEIGH EAST',
            'CAULFIELD',
            'CAULFIELD EAST',
            'CAULFIELD NORTH',
            'CAULFIELD SOUTH',
            'CARNEGIE',
            'ELSTERNWICK',
            'GARDENVALE',
            'GLEN HUNTLY',
            'MCKINNON',
            'MURRUMBEENA',
            'ORMOND',
            'ST KILDA EAST',
            'ASPENDALE',
            'ASPENDALE GARDENS',
            'BONBEACH',
            'BRAESIDE',
            'CARRUM DOWNS',
            'CHELSEA',
            'CHELSEA HEIGHTS',
            'CHELTENHAM',
            'CLARINDA',
            'CLAYTON SOUTH',
            'DINGLEY VILLAGE',
            'EDITHVALE',
            'HEATHERTON',
            'HIGHETT',
            'MENTONE',
            'MOORABBIN',
            'MOORABBIN AIRPORT',
            'MORDIALLOC',
            'PARKDALE',
            'PATTERSON LAKES',
            'WATERWAYS',
            'ASHWOOD',
            'BURWOOK',
            'CHADSTONE',
            'CLAYTON',
            'GLEN WAVERLEY',
            'HUGHESDALE',
            'HUNTINGDALE',
            'MONASH UNIVERSITY',
            'MOUNT WAVERLEY',
            'MULGRACE',
            'NOTTING HILL',
            'OAKLEIGH',
            'OAKLEIGH EAST',
            'OAKLEIGH SOUTH',
            'WHEELERS HILL',
            'BLAIRGOWRIE',
            'DROMANA',
            'MCCRAE',
            'MORNINGTON',
            'MOUNT EILZA',
            'MOUNT MARTHA',
            'PORTSEA',
            'ROSEBUD',
            'ROSEBUD WEST',
            'RYS',
            'SAFETY BEACH',
            'ST ANDREWS BEACH',
            'SORRENTO',
            'TOOTGAROOK',
            'BITTERN',
            'CRIB POINT',
            'HASTINGS',
            'SOMERVILLE',
            'TYABB',
            'ARTHURS SEAT',
            'BALNARRING',
            'BALNARRING BEACH',
            'BAXTER',
            'BONEO',
            'CAPE SCHANCK',
            'FINGAL',
            'FLINDERS',
            'HMAS CERBERUS',
            'MAIN RIDGE',
            'MERRICKS',
            'MERRICKS BEACH',
            'MERRICKS NORTH',
            'MOOROODUC',
            'POINT LEO',
            'RED HILL',
            'RED HILL SOUTH',
            'SHOREHAM',
            'SOMERS',
            'TUERONG',
            'ARMADALE',
            'GLEN IRIS',
            'KOOYONG',
            'MALVERN',
            'MALVERN EAST',
            'PRAHRAN',
            'SOUTH YARRA',
            'TOORAK',
            'WINDSOR',
            'ALBANVALE',
            'ALBION',
            'ARDEER',
            'BROOKLYN',
            'CAIRNLEA',
            'CALDER PARK',
            'DEER PARK',
            'DELAHEY',
            'DERRIMUT',
            'HILLSIDE',
            'KEALBA',
            'KEILOR',
            'KEILOR DOWNS',
            'KEILOR EAST',
            'KEILOR LODGE',
            'KEILOR NORTH',
            'KEILOR PARK',
            'KINGS PARK',
            'ST ALBANS',
            'SUNSHINE',
            'SUNSHINE NORTH',
            'SUNSHINE WEST',
            'SYDENHAM',
            'TAYLORS LAKES',
            'ALTONA',
            'ALTONA MEADOWS',
            'ALTONA NORTH',
            'BROOKLYN',
            'LAVERTON',
            'NEWPORT',
            'SPOTSWOOD',
            'SEABROOK',
            'SEAHOLME',
            'SOUTH KINGVILLE',
            'WILLIAMSTOWN',
            'WILLIAMSTOWN NORTH',
            'BRAYBROOK',
            'FOOTSCRAY',
            'KINGSVILLE',
            'MAIDSTONE',
            'MARIBYRNONG',
            'SEDDON',
            'TOTTENHAM',
            'WEST FOOTSCRAY',
            'YARRAVILLE',
            'BURNSIDE',
            'BURNSIDE HEIGHTS',
            'CAROLINE SPRINGS',
            'HILLSIDE',
            'TAYLORS HILL',
            'BROOKFIELD',
            'KURUNJANG',
            'MELTON',
            'MELTON SOUTH',
            'MELTON WEST',
            'DIGGERS REST',
            'EXFORD',
            'EYNESBURY',
            'MOUNT COTTRELL',
            'PARWAN',
            'PLUMPTON',
            'RAVENHALL',
            'ROCKBANK',
            'TOOLERN VALE',
            'TRUGANINA',
            'HOPPERS CROSSING',
            'LAVERTON',
            'LAVERTON NORTH',
            'MANOR LAKES',
            'POINT COOK',
            'TARNEIT',
            'TRUGANINA',
            'WERRIBEE',
            'WERRIBEE SOUTH',
            'WILLAMS LANDING',
            'WYNDHAM VALE',
            'COCOROC',
            'EYNESBURY',
            'LITTLE RIVER',
            'MAMBOURIN',
            'MOUNT COTTRELL',
            'QUANDONG'
        ];
        $( "#search" ).autocomplete({
            source: availableTags,
            autoFocus: true,
            select: function(event, ui) {
               // alert(ui.item.value);
                $("#search").val(ui.item.value+" ");
                $("#search").text(ui.item.value+" ");
                $("#search").html(ui.item.value);
            }
        });

    } );

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 50) {
    //         $(".navbar-brand a").css("color","#fff");
    //         $("#top-bar").removeClass("animated-header");
    //     } else {
    //         $(".navbar-brand a").css("color","inherit");
    //         $("#top-bar").addClass("animated-header");
    //     }
    // });

    // $("#clients-logo").owlCarousel({
    //
    //     itemsCustom : false,
    //     pagination : false,
    //     items : 5,
    //     autoplay: true,
    //
    // })

});



// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});



 




