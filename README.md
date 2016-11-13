Taiga Bulk Generator
====================

Taiga.io is an awesome project management tool but it does miss some functionality.  Chiefest among those was the ability to generate data in bulk with similar structure.

This project is aimed to provide set of tools to provide the said bulk functionality.

Currently the only feature is the bulk creation of sprints aka. milestones.

## What are these fancy fields?

###Project id
The numerical id of the project you are generating sprints from.  Look at section "How do I use this?" to find out how to retrieve this data.

###Your taiga ai url
The url for your taiga installation index.

###Authentication token
JWT token (I think).  Used to tell taiga you are authorized to send POST request to the installation.

###Days in sprint
This is used to control how many days a single sprint lasts.  For example if you decide that your sprints starts at sunday 13th of November and ends at 20th of the same month and you set your Days in sprint for 7 days then one sprint will be generated that lasts seven days starting from 13th.  19th would be the last day of the sprint with 20th potentially starting the next sprint.

###Start sprint name numbering from
Currently this is a disabled field and all sprints generated start from #1.  For example with default settings a sprint starting November 13th of 2016 would be named "Sprint #1/2016 Week #45".

###Start date
This is the date you set your first sprint to start.

###End date
This is the date where you set your last sprint to end.  Do note that the last date is not included in the last sprint but ends in the day before.

###Add current year to sprint name
When checked, the name of the sprint turns from "Sprint #1/2016 Week #45".  Without it the text would read "Sprint #1 Week #45".

###Add current week to sprint name
When checked, the name of the sprint turns from "Sprint #1/2016 Week #45".  Without it the text would read "Sprint #1/2016".

With both above settings unchecked the generated name would be "Sprint #1".

## How do I use this?

Clone the repo and open sprintGenerator.html in your browser.  You will need to hunt down some things from your taiga session, primarily the authentication token.  

First though, insert your taiga url into "Your taiga api url" field.  For me that is project.tomkarho.com.

Next we hunt down authorization token and this is done easiest via google chrome developer tools. Open the tools (F12) and create one test sprint.  Now take a look at your network tab and click on the POST request made to /milestones.  From requeset headers find the line that says "Authorization".  Copy the fancy text after "Bearer" and paste it into the "Authentication token" field on sprintGenerator.

Next, get the project id for the project you are generating sprints for.  The same POST request has at the bottom something called "Query String Parameters".  You'll find your project id there.  Insert it into "Project id" field.

Now just pick your start date, end date, sprint length and start generating.

