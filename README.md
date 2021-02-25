# MEETUP

## Länk till Github: 
```
https://github.com/jensengbg-maria-ahlen/meetup


## Molntjänst: 
```
Jag har använt mig av Heroku som molnapp. Den hittas här: https://meetup-maria.herokuapp.com/#/


## Level ups: 
```
1. API - Har skapat ett privat api på jsonbin.io som jag hämtar med fetch i min store.

2. Systemtester och integrationstester - Jag testar routing, när man klickar på ett event och skickas vidare till en annan route. 

3. Sortera/filtrera - Har ett sökfält där jag kan söka efter eventnamn, datum och arrangör. 


## Reflektion: 
```
Det har känns mycket kul att få arbeta med ramverk igen. Tyvärr tycker jag att vi skulle gjort det i varje kurs sen vi lärde oss det första gången då vi är nya och det man lär sig är en färskvara. Har tagit extra lång tid att skapa ett projekt nu för att jag måste tyvärr googla mer än vad jag hade behövt. Eller att kurserna hade lagts upp i annorlunda ordning. 

TDD - Detta tycker jag är det viktigaste vi har lärt oss i denna kursen. Testning är så viktigt för att verkligen se så att det fungerar som det ska. Är det något som inte fungerar korrekt så kan hela projektet bli förstört för den som har beställt. Det kan då ta onödigt lång tid att lösa och hitta, när det kanske hade kunnat lösas direkt om man testat ordentligt. 
Jag tycker dock att det är lite svårt med testning, framförallt nu när jag kör testning via vuex, vet inte riktigt hur jag skulle få fram all informationen ibland, så det tog lite lång tid att få fram lösningen. 

Docker - När man väl har gjort det några gånger är det inte svårt att sätta upp. Den är ju bra för att göra appen mer effektiv och ha med mindre data. Det är också en viktig del då mer data kan göra att det går långsammare. 

Parcel - Denna gick vi igenom på en lektion grundligt. Jag hade gärna sett lite mer av denna, att vi hade kunnat kombinera ihop det kompatibelt med Docker och Heroku, eller om vi hade kunnat fått lära oss ett annat liknande system. Detta ska ju göra att allt går snabbare. Det hade varit kul att få testa på i ett eget projekt.

Heroku - Funkar bra när man inte har en egen backend att ladda upp och köra. Men har man en egen backend då fungerar ingenting som det ska. Satt i två onödiga dagar och försökte mig på att lösa detta utan resultat, jag fick kasta min backend och skapa upp med ett online-api, jsonbin. Mycket bortkastad tid som jag hade kunnat lägga på annat. 
Det som jag tycker är dåligt med detta är om jag hade jobbat med detta påriktigt och behövt skapa upp en egen backend. Jag hade kanske inte valt Heroku, utan till exempel Azure, som är mer känt och funkar riktigt bra. 

Det som dock är bra när man bara har en frontend att ladda upp det är att det är smidigt när man kopplar det till sin github. Då är det bara att posta och så uppdateras det av sig själv. 


## Steg för steg - upsättning av projekt: 
```
1. Skapa ett projekt med Vue CLI. Jag valde version 2, vue-router, vuex, jest, eslint och babel.

2. Uppdatera eslint plugin till version 7.0.0 minst annars kommer inte Docker fungera. 

3. Installera http-server lokalt till ditt projekt. 

4. Skapa en Dockerfile där följande info skrivs in: 
    - FROM node:lts-alpine
    - WORKDIR /app
    - COPY package*.json ./
    - RUN npm install
    - COPY . .
    - RUN npm run build
    - EXPOSE 8080
    - CMD [ "http-server", "/app/dist/" ]

5. Skapa en heroku.yml som innehåller följande info: 
    build:
     docker:
      web: ./Dockerfile

6. Skapa ett nytt projekt på Github och ladda upp ditt projekt. 

7. Gå till https://dashboard.heroku.com/ och skapa ett konto. Jag kopplade ihop med mitt githubkonto. 

8. Skapa en ny app. Skriv ett relevant namn och välj Europa som region. Gå vidare. 

9. Koppla ihop med ditt Github-konto och sök efter ditt projekt. 

10. Anslut projektet och vänta tills den har byggt klart. Nu kan du se din app. 
