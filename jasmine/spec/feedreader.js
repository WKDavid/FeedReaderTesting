/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    describe('RSS Feeds', function() {
        /* @description: The test is to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* @description: The test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a url defined, that is not empty', function() {
           allFeeds.forEach(function(each) {
             expect(each.url).toBeDefined();
             expect(each.url).not.toBe('');
           });
         });

        /* @description: The test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name defined and that is not empty', function() {
           allFeeds.forEach(function(each) {
             expect(each.name).toBeDefined();
             expect(each.name.length).not.toBe(0);
           });
         });
    });

    describe('The menu', function() {

        beforeEach(function() {
           body = document.getElementsByTagName("body")[0];
        });

        /* @description: The test ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
           expect(body.classList).not.toBe('');
         });

         /* @description: The test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility on click', function() {
            let theMenu = document.getElementsByClassName("menu-icon-link")[0];
            theMenu.click();
            expect(body.className).toBe('');
            theMenu.click();
            expect(body.classList).not.toBe('');
          });
    });

    describe('Initial Entries', function() {

        /* @description: The test ensures that, when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
           setTimeout(function() {
             feedContParent = document.getElementsByClassName("feed")[0];
             feedContChild = document.getElementsByClassName("entry-link")[0];
             done();
           }, 1000 );
         });

         it('there is at least one entry within the feed container', function(done) {
           expect(feedContParent.childNodes).toContain(feedContChild);
           done();
         });
    });

    describe('New Feed Selection', function() {
      
        /* @description: the test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Here, after the page is loaded, I am calling the loadFeed
         * function with a random number (except for 0) as an argument.
         * Afterwards, the code checks, if child nodes of feed class
         * are actually different.
         */
         beforeEach(function(done) {
           setTimeout(function() {
             feedContentBefore = document.getElementsByClassName("feed")[0].children[0];
             nr = Math.floor(Math.random() * Math.floor(2) + 1);
             loadFeed(nr);
             done();
           }, 1000 );
         });

         it('a new feed has been loaded with different content', function(done) {
           setTimeout(function() {
             feedContentAfter = document.getElementsByClassName("feed")[0].children[0];
             expect(feedContentBefore).not.toBe(feedContentAfter);
             done();
           }, 1500 );
         });
    });
}());
