/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 *
 * Jasmine Documentation: https://jasmine.github.io/2.0/introduction.html
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project.
         *
         * What happens when you change
         * allFeeds in app.js to be an empty array and
         * refresh the page?
         *
         * Answer: When I comment out the elements of the array
         * in allFeeds, I receive an error that says
         * "1 Spec, 1 Failure". I also see an error log.
         * The Udacity Blog feed no longer shows up.
         * Lastly, when I click on the hamburger
         * tab in the upper left, I know longer see
         * options for the "Udacity Blog", "CSS Tricks",
         * "HTML5 Rocks", and "Linear Digressions" feeds.
         */
        it('are defined.', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         function urlFunc(allFeeds) {
           /* This states that we are expecting for there to be
            * a url defined in the allFeeds array
            */
           expect(allFeeds.url).toBeDefined();
           /* If a url is defined in allFeeds, then
            * we'll move down to the expectation.
            * Here, we are expecting that there should be
            * at least one character in the url section.
            * Essentially, we do NOT want there to be 0
            * characters.
            */
           expect(allFeeds.url.length).not.toBe(0);
         }

         /* If the expectations in the function
          * urlFunc are met, then we'll add the following
          * so the Jasmine tester will print the following
          * under the RSS Feeds header in the Jasmine
          * section at the bottom of the page.
          */
         it('have defined a url. The url field is not empty.', function() {
           /* Here, we are applying the urlFunc expectations
           * to each url so that we can ensure none of them
           * are empty.
           */
           allFeeds.forEach(urlFunc);
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         function nameFunc(allFeeds) {
           /* This states that we are expecting for there to be
            * a name defined in the allFeeds array
            */
           expect(allFeeds.name).toBeDefined();
           /* If a name is defined in allFeeds, then
            * we'll move down to the expectation.
            * Here, we are expecting that there should be
            * at least one character in the name section.
            * Essentially, we do NOT want there to be 0
            * characters.
            */
           expect(allFeeds.name.length).not.toBe(0);
         }

         /* If the expectations in the function
          * nameFunc are met, then we'll add the following
          * so the Jasmine tester will print the following
          * under the RSS Feeds header in the Jasmine
          * section at the bottom of the page.
          */
         it('have defined a name. The name field is not empty.', function() {
           /* Here, we are applying the nameFunc expectations
            * to each name so that we can ensure none of them
            * are empty.
            */
           allFeeds.forEach(nameFunc);
         });
    }); // Closing bracket for RSS Feeds test suite


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         /* If the expectation in the following function
          * is met, then the Jasmine tester will print
          * "is hidden" under "The menu" header in the
          * Jasmine section at the bottom of the page.
          */
         it('is hidden', function() {
          var docBody = $('body');
           /* This expection states that we are
            * expecting for the menu to be hidden.
            * We know the menu is hidden when the
            * menu-hidden class has been called
            */
           expect(docBody.hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('will be visible when the menu icon is clicked. If the menu is clicked again, it will no longer be visible.', function() {
            // Part One: Makes sure menu shows when clicked
            $('a.menu-icon-link').trigger('click');
            /* This expectation states that when the menu icon
             * is initially clicked, the menu bar will appear.
             * This works because we expect the class
             * menu-hidden (which is used to hide the menu)
             * to NOT be true.
             */
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Part Two: Makes sure the menu hides when the menu is clicked again
            $('a.menu-icon-link').trigger('click');
            /* This expectation states that when the menu icon
             * is clicked again, the menu bar will disappear.
             * This works because we expect the class
             * menu-hidden  (which is used to hide the menu)
             * to be true.
             */
            expect($('body').hasClass('menu-hidden')).toBe(true);

          });

    }); // Closing bracket for The menu test suite

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         /*  "done" is included here because this
          * spec will not start before the done function
          * is called to beforeEach
          */
         beforeEach(function(done) {
           /* Here, the loadFeed function is called.
            * The reason why the "done" function
            * is called down here again is because this
            * spec will not be completed until the
            * done function is called for a second time.
            */
           loadFeed(0, done);
         });

         /* If the expectation in the following function
          * is met, then the Jasmine tester will print
          * "are called and able to complete their work"
          * under "Initial Entries" header in the Jasmine
          * section at the bottom of the page.
          */
         it('are called and able to complete their work.', function() {
           var entryInFeed = $('.feed .entry');
           /* Here, we are expecting that there needs
            * to be at least one .entry element within the
            * .feed container. Essentially, we are stating
            * that there has to be something in .entry
            * and at least one .entry element should be present
            * in the .feed container.
           */
           expect(entryInFeed.length).toBeGreaterThan(0);
         });

    }); // Closing bracket for Initial Entries test suite

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         /* Here, we are creating a variable for
          * the previous feed. This will be called and
          * set equal to something later
          */
         var previousFeed;

         /*  "done" is included here because this
          * spec will not start before the done function
          * is called to beforeEach
          */
         beforeEach(function(done) {
           loadFeed(0, function() {
             /* Here, we are assigning the variable
             * previousFeed to equal the feed class
             * from the HTML file
             */
             previousFeed = $('.feed').html();
             /* Here, the loadFeed function is called.
              * This will be used to get the newer version
              * of the feed.
              * The reason why the "done" function
              * is called down here again is because this
              * spec will not be completed until the
              * done function is called for a second time.
              */
             loadFeed(1, done);
           });
         });

         /* If the expectation in the following function
         * is met, then the Jasmine tester will print
         * "has been updated and is different from the
         * previous feed"
         * under "New Feed Selection" header in the Jasmine
         * section at the bottom of the page.
         */
         it('has been updated and is different from the previous feed.', function() {
           var currentFeed = $('.feed');
           /* Here, we are stating that we are
            * expectung that the currentFeed should
            * not be the same as the previousFeed.
            * Essentially, we want the feed to be updated
            * when there are new articles available.
            */
           expect(currentFeed.html()).not.toBe(previousFeed);
         });

       }); // Closing bracket for New Feed Selection

}()); // Closing bracket for $(function()
