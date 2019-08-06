      var scrollToHash = function(hash) {
        var section = document.getElementById(hash.slice(1));
        section.scrollIntoView({behavior: "smooth"});
      }
      var scrollSectionIntoView = function(elem) {
        var id = elem.firstChild.nextSibling.dataset.href;
        scrollToHash(id);
      }
      var isInViewport = function (elem) {
        var position = elem.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return position.top < windowHeight/2 && position.bottom >= windowHeight/2;
      }
      var activateLink = function (element) {
        var link = document.querySelector("a[data-href*='#"+element.id+"']");
        if (!link.classList.contains('active')) {
          link.classList.add('active');
        }
      }
      var deactivateLink = function (element) {
        var link = document.querySelector("a[data-href*='#"+element.id+"']");
        if (link.classList.contains('active')) {
          link.classList.remove('active');
        }
      }
      window.addEventListener('scroll', function() {
        var elements = document.getElementsByClassName('content');
        var i=0;
        for (i = 0; i < elements.length; i++) {
          if (isInViewport(elements[i])) {
            activateLink(elements[i]);
          } else {
            deactivateLink(elements[i]);
          }
        }
      });
