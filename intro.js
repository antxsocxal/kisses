(function() {
  const intro = document.getElementById('intro');
  const body = document.body;
  const TRANSITION_DURATION = 1200;

  function startTransition() {
    body.classList.add('loaded');
    intro.classList.add('transitioning');
  }

  function hideIntro() {
    intro.classList.add('hidden');
  }

  function run() {
    setTimeout(startTransition, 2000);
    setTimeout(hideIntro, 2000 + TRANSITION_DURATION);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
