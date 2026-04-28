var MODEL = (function(){
    var homeContent = `<div class="home-content"> <!-- Begin Home content container -->
    <div class="hero"> 
        <h1>Header goes here</h1>
        <h4>Less important text goes here</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Fugiat aliquid minus nemo sed est.
        </p>
        <div class="link-button">
            Read More
        </div>

    </div> 
    <div class="mission-statement"><!-- Begin Mission Statement -->
        <p>
            “Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium totam rem 
            aperiam eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Iste 
            natus error sit voluptatem accusantium doloremque 
            laudantium totam rem aperiam eaque ipsa quae ab illo 
            inventore veritatis et quasi architecto beatae vitae dicta 
            sunt explicabo”
        </p>
        <h4>John Smith</h4>
        <h6>Corporation CEO, books author.</h6>
    </div> <!-- End Mission Statement-->
    <div class="upcoming-events">
        <div class="events-header">
            <h1>Upcoming Events:</h1>
        </div>
        <div class="events-container">
            <div class="event-item">
                <div class="date-box-sm">
                    <h2>06</h2>
                    <h3>Jun</h3>
                </div>
                <div class="event-text">
                    <h4>Sed et persipiatis unde omnis iste natus</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Aliquid temporibus quos aspernatur
                    </p>
                </div>
            </div>
            <div class="event-item">
                <div class="date-box-sm">
                    <h2>30</h2>
                    <h3>Jul</h3>
                </div>
                <div class="event-text">
                    <h4>Sed et persipiatis unde omnis iste natus</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Aliquid temporibus quos aspernatur
                    </p>
                </div>
            </div>
            <div class="event-item">
                <div class="date-box-sm">
                    <h2>30</h2>
                    <h3>Aug</h3>
                </div>
                <div class="event-text">
                    <h4>Sed et persipiatis unde omnis iste natus</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Aliquid temporibus quos aspernatur
                    </p>
                </div>
            </div>
            <div class="event-item">
                <div class="date-box-sm">
                    <h2>23</h2>
                    <h3>Nov</h3>
                </div>
                <div class="event-text">
                    <h4>Sed et persipiatis unde omnis iste natus</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Aliquid temporibus quos aspernatur
                    </p>
                </div>
            </div>
            <div class="event-item">
                <div class="date-box-sm">
                    <h2>23</h2>
                    <h3>Dec</h3>
                </div>
                <div class="event-text">
                    <h4>Sed et persipiatis unde omnis iste natus</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Aliquid temporibus quos aspernatur
                    </p>
                </div>
            </div>
        </div>
    </div>
</div> <!-- End Home content container -->`;
    var aboutContent = `<div class="about-content"> <!-- Begin About page content -->
    <div class="about-hero"></div>
    <div class="header-box">
        <h1>Our History:</h1>
    </div>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque 
        ipsa quae ab illo inventore veritatis et quasi architecto 
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
        quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi 
        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia 
        dolor sit amet, consectetur, adipisci velit, sed quia non 
        numquam eius modi tempora incidunt ut labore et dolore magnam 
        aliquam quaerat voluptatem. 
    </p>
</div> <!-- End About page content -->`;
    var contactContent = `<div class="contact-content"> <!-- Begin Contact page content -->
    <div class="header-box">
        <h1>Contact Us:</h1>
    </div>
    <div class="contact-main">
        <div class="contact-form">
            <input id="name" type="text" placeholder="Your name...">
            <input id="email" type="text" placeholder="Email Address...">
            <input id="company" type="text" placeholder="Company...">
            <textarea placeholder="Message..." name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div class="contact-map">
            <img src="images/map.jpg" alt="map">
        </div>
    </div>
    <button id="contactSubmit" type="submit">Send Message</button>
</div> <!-- End Contact page content -->`;
    var blogContent = `<div class="blog-content"> <!-- Begin main Blog page content -->
    <div class="header-box">
        <h1>Blog:</h1>
    </div>
    <div class="blog-items-container">
        <div class="blog-item">
            <div class="date-box-sm">
                <h2>06</h2>
                <h3>Jun</h3>
            </div>
            <div class="blog-item-content">
                <a id="blogOne" href="#">
                    <img src="images/blog.jpg" alt="blog">
                </a>
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam 
                    rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt 
                    explicabo. 
                </p>
            </div>
        </div>
        <div class="blog-item">
            <div class="date-box-sm">
                <h2>30</h2>
                <h3>Jul</h3>
            </div>
            <div class="blog-item-content">
                <a id="blogTwo" href="#">
                    <img src="images/blog.jpg" alt="blog">
                </a>
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam 
                    rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt 
                    explicabo. 
                </p>
            </div>
        </div>
        <div class="blog-item">
            <div class="date-box-sm">
                <h2>30</h2>
                <h3>Aug</h3>
            </div>
            <div class="blog-item-content">
                <a id="blogThree" href="#">
                    <img src="images/blog.jpg" alt="blog">
                </a>
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam 
                    rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt 
                    explicabo. 
                </p>
            </div>
        </div>
        <div class="blog-item">
            <div class="date-box-sm">
                <h2>23</h2>
                <h3>Nov</h3>
            </div>
            <div class="blog-item-content">
                <a id="blogFour" href="#">
                    <img src="images/blog.jpg" alt="blog">
                </a>
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam 
                    rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt 
                    explicabo. 
                </p>
            </div>
        </div>
        <div class="blog-item">
            <div class="date-box-sm">
                <h2>23</h2>
                <h3>Dec</h3>
            </div>
            <div class="blog-item-content">
                <a id="blogFive" href="#">
                    <img src="images/blog.jpg" alt="blog">
                </a>
                <h4>Sed et persipiatis unde omnis iste natus</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit 
                    voluptatem accusantium doloremque laudantium, totam 
                    rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt 
                    explicabo. 
                </p>
            </div>
        </div>
    </div>
</div> <!-- End main Blog page content -->`;
    var blogOneContent = `<div class="blog-content"> <!-- Begin individual Blog page content -->
    <div class="blog-hero">
        <div class="date-box-lg">
            <h2>06</h2>
            <h3>Jun</h3>
        </div>
    </div>
    <div class="article-container">
        <h4>Header #1:</h4>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt.
        </p>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem.  
        </p>
    </div>
    <div class="article-container">
        <h4>Header #2:</h4>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Blog page content -->`;
    var blogTwoContent = `<div class="blog-content"> <!-- Begin individual Blog page content -->
    <div class="blog-hero">
        <div class="date-box-lg">
            <h2>30</h2>
            <h3>Jul</h3>
        </div>
    </div>
    <div class="article-container">
        <h4>Header #1:</h4>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt.
        </p>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem.  
        </p>
    </div>
    <div class="article-container">
        <h4>Header #2:</h4>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Blog page content -->`;
    var blogThreeContent = `<div class="blog-content"> <!-- Begin individual Blog page content -->
    <div class="blog-hero">
        <div class="date-box-lg">
            <h2>30</h2>
            <h3>Aug</h3>
        </div>
    </div>
    <div class="article-container">
        <h4>Header #1:</h4>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt.
        </p>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem.  
        </p>
    </div>
    <div class="article-container">
        <h4>Header #2:</h4>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Blog page content -->`;
    var blogFourContent = `<div class="blog-content"> <!-- Begin individual Blog page content -->
    <div class="blog-hero">
        <div class="date-box-lg">
            <h2>23</h2>
            <h3>Nov</h3>
        </div>
    </div>
    <div class="article-container">
        <h4>Header #1:</h4>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt.
        </p>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem.  
        </p>
    </div>
    <div class="article-container">
        <h4>Header #2:</h4>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Blog page content -->`;
    var blogFiveContent = `<div class="blog-content"> <!-- Begin individual Blog page content -->
    <div class="blog-hero">
        <div class="date-box-lg">
            <h2>23</h2>
            <h3>Dec</h3>
        </div>
    </div>
    <div class="article-container">
        <h4>Header #1:</h4>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt.
        </p>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem.  
        </p>
    </div>
    <div class="article-container">
        <h4>Header #2:</h4>
        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Blog page content -->`;
    var galleryContent = `<div class="gallery-content"> <!-- Begin Gallery content -->
    <div class="header-box">
        <h1>Gallery:</h1>
    </div>
    <div class="gallery-top">
        <a id="galleryOne" href="#"></a>
        <a id="galleryTwo" href="#"></a>
        <a id="galleryThree" href="#"></a>
    </div>
    <div class="gallery-bottom">
        <a id="galleryFour" href="#"></a>
        <a id="galleryFive" href="#"></a>
    </div>
</div> <!-- End Gallery content -->`;
    var galleryOneContent = `<div class="gallery-content"> <!-- Begin individual Gallery page content -->
    <div class="gallery-hero gallery-one">
        <div class="gallery-hero-text">
            <h1>1.</h1>
            <h2>food festival</h2>
        </div>
    </div>
    <div class="gallery-article">
        <p class="p-left">
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. 
        </p>
        <p class="p-right">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Gallery page content -->`;
    var galleryTwoContent = `<div class="gallery-content"> <!-- Begin individual Gallery page content -->
    <div class="gallery-hero gallery-two">
        <div class="gallery-hero-text">
            <h1>2.</h1>
            <h2>dee-jay</h2>
        </div>
    </div>
    <div class="gallery-article">
        <p class="p-left">
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. 
        </p>
        <p class="p-right">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Gallery page content -->`;
    var galleryThreeContent = `<div class="gallery-content"> <!-- Begin individual Gallery page content -->
    <div class="gallery-hero gallery-three">
        <div class="gallery-hero-text">
            <h1>3.</h1>
            <h2>speech</h2>
        </div>
    </div>
    <div class="gallery-article">
        <p class="p-left">
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. 
        </p>
        <p class="p-right">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Gallery page content -->`;
    var galleryFourContent = `<div class="gallery-content"> <!-- Begin individual Gallery page content -->
    <div class="gallery-hero gallery-four">
        <div class="gallery-hero-text">
            <h1>4.</h1>
            <h2>open foodfest</h2>
        </div>
    </div>
    <div class="gallery-article">
        <p class="p-left">
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. 
        </p>
        <p class="p-right">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Gallery page content -->`;
    var galleryFiveContent = `<div class="gallery-content"> <!-- Begin individual Gallery page content -->
    <div class="gallery-hero gallery-five">
        <div class="gallery-hero-text">
            <h1>5.</h1>
            <h2>international</h2>
        </div>
    </div>
    <div class="gallery-article">
        <p class="p-left">
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo. Nemo 
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
            aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. 
        </p>
        <p class="p-right">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
            amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam 
            quaerat voluptatem. 
        </p>
    </div>
</div> <!-- End individual Gallery page content -->`;
    var _changePageContent = function(pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));
        initListeners();

        if (pageName == "home"){
            $("#nav").addClass("home-nav");
            $("#nav-logo").addClass("logo-white");
            $("#nav-logo").removeClass("logo");
        } else {
            $("#nav-logo").addClass("logo");
            $("#nav").removeClass("home-nav");
            $("#nav-logo").removeClass("logo-white");
        };
    };

    return {
        changePageContent: _changePageContent,
    };
})();