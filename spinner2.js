const stringTimer = function(string, time) {
  setTimeout(() => {
    process.stdout.write(string);
  }, time);
}
stringTimer('\r|   ', 100);
stringTimer('\r/   ', 300);
stringTimer('\r-   ', 500);
stringTimer('\r\\   ',700);
stringTimer('\r|   ', 900);
stringTimer('\r/   ', 1100);
stringTimer('\r-   ', 1300);
stringTimer('\r\\   ',1500);
stringTimer('\r|   ', 1700);
