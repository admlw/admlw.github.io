/*.....................................
 global
 ......................................*/

:root {
  --primary-color: #87A330;
  --secondary-color: #1C1D22;
}

/* alt scheme */
/*
:root {
  --primary-color: #4ECDC4;
  --secondary-color:#292F36;
}
*/

/*.....................................
main
 ......................................*/

body {
  background-color: #FFFFFF;
  font-size: 16px;
  font: Helvetica, Ariel, sans-serif;
  color: #0C090D;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

html {
  height: 101%;
}

h1 {
  font-family: overpass;
  text-align: center;
  font-weight: bolder;
}

footer-copyright {
  font-size: 15px;
}

a {
  font-weight: bolder;
  color: var(--primary-color);
}

a:hover {
  font-weight: bolder;
  color: var(--primary-color);
}

/*.....................................
  title
 ......................................*/
.welcome {
  height: 400px;
  background-color: var(--secondary-color);
}

.welcome-text {
  margin-top: -10px;
  color: #FFFFFF;
}

.page-title {
  font-family: overpass;
  font-size: 100px;
  font-weight: bolder;
  color: var(--primary-color);
  line-height: 100px;
  text-align: center;
}

.card {
  margin-top:    5px;
  margin-bottom: 5px;
  padding:       10px;
  padding-left:  20px;
  padding-right: 20px;
}

.card a {
  font-size: 25px;
  font-family: overpass;
  font-weight: bolder;
  color: var(--primary-color);
}

.card h2 {
  font-size: 20px;
  font-style: italic;
  font-weight: normal;
}
