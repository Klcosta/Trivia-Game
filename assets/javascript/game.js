 //Necessary variables
 //selector variable
  var x = 0
  //wins variable
  var wins = 0
  //variables for counting questions
  var counter = 0
  var limit = 0
  //objects with questions and answers
  var Questions = [
      question1 = { 
          Question: "Where did the Battle of Gettysburg happen?",
          Answers: ["Gettysburg, VA", "Gettysburg, MD" , "Gettysburg, CO" , "Gettysburg, PA",],
          CorrectAnswer: "Gettysburg, PA",
          },
      question2 = {
          Question: "Who was the first president of the United States?",
          Answers: ["George Washington","Alexander Hamilton","Thomas Jefferson", "Abraham Lincoln"],
          CorrectAnswer: "George Washington"
      },
      question3 = {
          Question: "What American was the world's first billionaire?",
          Answers: ["John D Rockefeller", "Andrew Carnegie", "Bill Gates", "Thomas Edison"],
          CorrectAnswer: "John D Rockefeller"
      },
      question4 = {
          Question : "What was the 14th state admitted into the union?",
          Answers : ["Montana", "Rhode Island", "Kentucky", "Vermont"],
          CorrectAnswer: "Vermont"
      },
      question5 = {
          Question : "What is the largest Native American Reservation in the United States?",
          Answers : ["Navajo Nation", "Wamapoke", "Wind River", "Cherokee"],
          CorrectAnswer: "Navajo Nation"
      },
      question6 = {
          Question : "What state was an internationally recognized republic before joining the United States?",
          Answers : ["Texas", "Hawaii", "Vermont", "All of the above"],
          CorrectAnswer: "All of the above"
      },
      question7 = {
          Question : "What was the first state to secede from the union?",
          Answers : ["South Carolina", "Alabama", "Virginia", "New Hampshire"],
          CorrectAnswer : "South Carolina"
      },
      question8 = {
          Question : "For whom is the state of Virginia named?",
          Answers : ["Queen Virginia", "Queen Mary", "Queen Elizabeth", "Virginia Washington"],
          CorrectAnswer : "Queen Elizabeth"
      },    
      question9 = {
          Question : "What Texas city witnessed the assasination of President Kennedy?",
          Answers : ["Dallas", "Houston", "San Antonio", "Corpus Christi"],
          CorrectAnswer : "Dallas"
      },    
      question10 = {
          Question : "What country did the United States buy the Louisiana Purchase from?",
          Answers : ["Spain", "Great Britian", "France", "Japan"],
          CorrectAnswer : "France"
      }, 
      question11 = {
          Question : "How many people are estimated to have lived in the modern day United States before the arrival of the first European settlers?",
          Answers : ["Less than 2 million", "Between 2 and 10 million", "Between 8 and 12 million", "About 100 million"],
          CorrectAnswer : "Between 2 and 10 million"
      }, 
      question12 = {
          Question : "What was the first successful English colony in the United States?",
          Answers : ["Roanoke Island", "Jamestown, Virginia", "Massachussetts Bay", "Plymouth"],
          CorrectAnswer : "Jamestown, Virginia"
      },
      question13 = {
          Question : "Who did Pocahontas marry?",
          Answers : ["John Smith", "John Rolfe", "Powhatan", "She did not marry"],
          CorrectAnswer : "John Rolfe"
      },  
      question14 = {
          Question : "Who was the first president to live in the White House?",
          Answers : ["John Adams", "George Washington", "Thomas Jefferson", "Ronald Reagan"],
          CorrectAnswer : "John Adams"
      },
      question15 = {
          Question : "What was the original name of New York?",
          Answers : ["New Amsterdam", "New London", "Birmingham", "Hudson"],
          CorrectAnswer : "New Amsterdam"
      },
      question16 = {
          Question : "How many people died at the Salem Witch Trials?",
          Answers : ["19", "200", "4", "36"],
          CorrectAnswer : "19"
      },
      question17 = {
          Question : "What is another name for the Seven Years War?",
          Answers : ["French and Indian War", "North American War", "The Revolutionary War", "The Korean War"],
          CorrectAnswer : "French and Indian War"
      },
      question18 = {
          Question : "What natural landmark defined the Proclamation Line of 1763?",
          Answers : ["The Appalachians", "The Mississippi River", "The Ohio River", "The Catskills"],
          CorrectAnswer : "The Appalachians"
      },
      question19 = {
          Question : "How many people were put on trial due to the Boston Massacre?",
          Answers : ["9", "11", "0", "456"],
          CorrectAnswer : "9"
      },
      question20 = {
          Question : "Calculating for inflation what is the montary loss cuased by the Boston Tea Party?",
          Answers : ["$4 Million", "$5000,000", "$1 Million", "$5.5 Million"],
          CorrectAnswer : "$4 Million"
      },
      question21 = {
          Question : "What Colony did not send delegates to the first Continental Congress?",
          Answers : ["New Hampshire", "South Carolina", "Texas", "Georgia"],
          CorrectAnswer : "Georgia"
      },
      question22 = {
          Question : "Who wrote the influential pamphlet Common Sense?",
          Answers : ["Thomas Paine", "Alexander Hamilton", "Thomas Jefferson", "William Bakersfield"],
          CorrectAnswer : "Thomas Paine"
      },
      question23 = {
          Question : "What inalienable rights are specifically mentioned in the Declaration of Idependence?",
          Answers : ["Life, Liberty and the Pursuit of Happiness", "Life, Liberty and Property", "Freedom, Happiness and Justice", "Life, Liberty and Happiness"],
          CorrectAnswer : "Life, Liberty and the Pursuit of Happiness"
      },
      question24 = {
          Question : "What battle ended the War of Independence?",
          Answers : ["Battle of Yorktown", "Battle of Western Kansas", "Battle of Saratoga", "The Battle of Monmouth"],
          CorrectAnswer : "Battle of Yorktown"
      },
      question25 = {
          Question : "Who was the first woman on the Supreme Court?",
          Answers : ["Sandra Day O'Connor", "Hillary Clinton", "Ruth Bader Ginsburg", "Samantha Cunningham"],
          CorrectAnswer : "Sandra Day O'Connor"
      },
      question26 = {
          Question : "What state elected the first African American Senator?",
          Answers : ["New York", "Montana", "Tennessee", "Mississippi"],
          CorrectAnswer : "Mississippi"
      },
      question27 = {
          Question : "What was the greatest flaw in the Articles of Confederation?",
          Answers : ["The government had no ability to collect revenue", "The government could not declare war", "All of the Above", "It did not have a regular place to meet"],
          CorrectAnswer : "The government had no ability to collect revenue"
      },
      question28 = {
          Question : "What was the first state to ratify the constitution?",
          Answers : ["Delaware", "Alaska", "Connecticut", "Virginia"],
          CorrectAnswer : "Delaware"
      },
      question29 ={
          Question : "Who wrote the Federalist Papers?",
          Answers : ["John Jay", "Alexander Hamilton", "James Madison", "All of the above"],
          CorrectAnswer : "All of the above"
      },
      question30 ={
          Question : "What was the great migration?",
          Answers : ["The movement of former slaves from the south to northern cities", "The large migration of southern European immigrants to the United States", "The movement of geese from canada to the southern United States ever year", "The movement of the United States from the Atlantic to the Pacific"],
          CorrectAnswer : "The movement of former slaves from the south to northern cities"
      },
      question31 ={
          Question : "What were the first two national political parties?",
          Answers : ["Federalists and Democratic Republicans", "Democrats and Republicans", "Socialists and Capitalists", "Federalists and Democrats"],
          CorrectAnswer : "Federalists and Democratic Republicans"
      },
      question32 ={
          Question : "Why did George Washington only serve two terms as president?",
          Answers : ["He chose not to run for a 3rd term", "The constitution did not let him run for a 3rd term", "He lost an election", "He died"],
          CorrectAnswer : "He chose not to run for a 3rd term"
      },
      question33 ={
          Question : "What was the Whiskey Rebellion?",
          Answers : ["A drinking game", "An armed protest against the Whiskey Tax", "A bar in Washington D.C", "A pacificst movement to prohibit the consumption of alcohol"],
          CorrectAnswer : "An armed protest against the Whiskey Tax"
      },
      question34 ={
          Question : "Who is the only sitting president to lead troops in the field?",
          Answers : ["George Washington", "Ulysses S. Grant", "Dwight D Eisenhower", "Andrew Jackson"],
          CorrectAnswer : "George Washington"
      },
      question35 ={
          Question : "What did the Alien and Sedition Acts do?",
          Answers : ["Made it harder to become a citizen", "Made it illegal to criticizise the government", "Both of these", "Neither of these"],
          CorrectAnswer : "Both of these"
      },
      question36 ={
          Question : "What Vermont congressman was jailed for breaking the Sedition Act?",
          Answers : ["Mathew Lyon", "John Adams", "Mark Sanford", "Calvin Coolidge"],
          CorrectAnswer : "Mathew Lyon"
      },
      question37 ={
          Question : "What two state legislatures passed resolutions against the Alien and Sedition Acts?",
          Answers : ["Virginia and Kentucky", "Vermont and North Carolina", "California and Arizona", "Delaware and Maryland"],
          CorrectAnswer : "Virginia and Kentucky"
      },
      question38 ={
          Question : "Who was the first president chosen by the House of Representatives after an Electoral College tie?",
          Answers : ["Thomas Jefferson", "Aaron Burr", "John Quincy Adams", "Barack Obama"],
          CorrectAnswer : "Thomas Jefferson"
      },
      question39 ={
          Question : "What was one of the first and most influencial salve uprisings in the United States?",
          Answers : ["Gabriel's Rebelion", "The War of 1812", "Shay's Rebellion", "The Slave Uprising of 1793"],
          CorrectAnswer : "Gabriel's Rebelion"
      },
      question40 ={
          Question : "Who was the first Supreme Court Chief Justice?",
          Answers : ["John Marshall", "John Jay", "Flint Maddox", "Martin O'Shae"],
          CorrectAnswer : "John Jay"
      },
      question41 ={
          Question : "What Supreme Court Decision created the power of judicial review?",
          Answers : ["None it was already in the constitution", "Marbury v. Madison", "West v. Barnes", "Bush v. Gore"],
          CorrectAnswer : "Marbury v. Madison"
      },
      question42 ={
          Question : "What Supreme Court Decision expanded the Supreme Court's powers of judicial review to include state laws?",
          Answers : ["Fletcher v. Peck", "Marbury v. Madison", "Brown v. The Board of Education", "Millingham v. New York"],
          CorrectAnswer : "Fletcher v. Peck"
      },
      question43 ={
          Question : "How much was the Louisiana Purchase?",
          Answers : ["$15 Million", "$250 Million", "$10 Million", "$110 Million"],
          CorrectAnswer : "$15 Million"
      },
      question44 ={
          Question : "What famouse Native American woman Guided Lewis and Clark on their expeidition through the Lousiana Purchase?",
          Answers : ["Sacagewea", "Pocahontas", "Queen Alliquippa ", "Hononegahn"],
          CorrectAnswer : "Sacagewea"
      },
      question45 ={
          Question : "What early feminist and founding father said 'Remember the Ladies, and be more generous and favorable to them than your ancestors.?'",
          Answers : ["Abigail Adams", "John Adams", "Martha Washington", "Betsy Ross"],
          CorrectAnswer : "Abigail Adams"
      },
      question46 ={
          Question : "What tribal leader led a multi-tribal confederation in battle against US expansion into the Great Lakes region in the early 1800's?",
          Answers : ["Tecumseh", "Lone Horn", "Pontiac", "Black Kettle"],
          CorrectAnswer : "Tecumseh"
      },
      question47 ={
          Question : "What American persident died after only 40 days in office?",
          Answers : ["William H Harrison", "Geroge Bush", "James Buchanan", "Martin Van Buren"],
          CorrectAnswer : "William Henry Harrison"
      },
      question48 ={
          Question : "What Battle in the War of 1812 lifted Andrew Jackson to prominence?",
          Answers : ["Battle of the Timbs", "Battle of Horshoe Bend", "Battle of New Orleans", "Battle of Northern Alaska"],
          CorrectAnswer : "Battle of New Orleans"
      },
      question49 ={
          Question : "What Treaty ended the battle of 1812?",
          Answers : ["Treaty of Gent", "Treaty of Paris", "Treaty of Toronto", "Treaty of 1815"],
          CorrectAnswer : "Treaty of Gent"
      },
      question50 ={
          Question : "Where did the Pony Express start and end?",
          Answers : ["St. Joseph, MO and Sacramento, CA", "St. Louis, MO and San Francisco, CA", "Chicago, IL and Los Angeles, CA", "New York City, NY and Phoenix, AZ"],
          CorrectAnswer : "St. Joseph, MO and Sacramento, CA"
      },
      question51 ={
          Question : "What state did Jeannette Pickering Rankin, the first congresswoman, represent?",
          Answers : ["New York", "Georgia", "Montana", "Illinois"],
          CorrectAnswer : "Montana"
      },
      question52 ={
          Question : "What was the first transportation infastructure between the eastern seabord and western interior?",
          Answers : ["Eire Canal", "The New York - Pittsburg Railway", "Upstate New York Canal", "The eastern seabord and the western interior were never connected"],
          CorrectAnswer : "Eire Canal", 
      },
      question53 ={
          Question : "What transportation innovation led to the standardization of time?",
          Answers : ["Railroads", "Canals", "Highways", "Time has always been standardized"],
          CorrectAnswer : "Railroads", 
      },
      question54 ={
          Question : "What is Manifest Destiny?",
          Answers : ["America's god given right to expand across the continent", "One of America's first and most popular rock bands", "The idea that America was too big and needed to shrink", "The legal process of adding new states to the Union"],
          CorrectAnswer : "America's god given right to expand across the continent", 
      },
      question55 ={
          Question : "How many Irish came to America to flee the potato famine of the 1840's?",
          Answers : ["Over 1.5 million", "around 500.000", "4", "between 1 million and 1.5 million"],
          CorrectAnswer : "Over 1.5 million", 
      },
      question56 ={
          Question : "Which famous 1800's poets work includes: Franklin Evans, Life and Adventures of Jack Engle, Leaves of Grass",
          Answers : ["Walt Whitman", "Ralph Waldo Emmerson", "Henry David Thoreau", "JK Rowling"],
          CorrectAnswer : "Walt Whitman", 
      },
      question57 ={
          Question : "By 1860 how many slaves were there in the United States",
          Answers : ["4 million", "10.5 million", "3 million", "8 million"],
          CorrectAnswer : "4 million", 
      },
      question58 ={
          Question : "By 1860 Slave accounted for what percentage of the population in the south?",
          Answers : ["A third", "A quarter", "An eighth", "A half"],
          CorrectAnswer : "A third", 
      },
      question59 ={
          Question : "After escaping how many times did Harriet Tumban return to the south to help others out of slavery?",
          Answers : ["20", "15", "6", "43"],
          CorrectAnswer : "20", 
      },
      question60 ={
          Question : "What was the name of the secret route that transported slaves from the south to free states in the north?",
          Answers : ["The underground railroad", "The freedom trail", "The northern route", "The freedom railroad"],
          CorrectAnswer : "The underground railroad", 
      },
      question61 ={
          Question : "Before becoming a state Maine was part of what other state?",
          Answers : ["Massachussetts", "New Hampshire", "Rhode Island", "California"],
          CorrectAnswer : "Massachussetts", 
      },
      question62 ={ 
          Question : "What did the Missouri compromise do?",
          Answers : ["It allowed Missouri statehood as a Slave State", "It admitted Maine into the Union as Free State", "Made slavery illegal in new states above the  36°30′ parallel", "All of the Above"],
          CorrectAnswer : "All of the Above", 
      },
      question63 ={ 
          Question : "Who wrote The Adventures of Huckleberry Finn?",
          Answers : ["Mark Twain", "Ernest Hemingway", "Scott Silverstein", "Scott F Fitzgerland"],
          CorrectAnswer : "Mark Twain", 
      },
  ]


    //FUNCTION TO RANDOMIZE THE ORDER OF QUESTIONS OR ANSWERS. 
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    }
//FUNCTIONS
    //FUNTION TO PUSH QUESTIONS AND ANSWERS TO THE HTML
    function push(){
        // Shuffle Answers
        shuffle(Questions[x].Answers)
        // Add necessary classes
        $(".button").addClass("bluehover")
        $("#questioncol").addClass("py-3 bordercolor")
        $(".buttoncol").addClass("bordercolor")
        $(".button").addClass("p-2")
        // Push answers to page
        $("#question").text(Questions[x].Question);
        $("#answer0").text(Questions[x].Answers[0]);
        $("#answer1").text(Questions[x].Answers[1]);
        $("#answer2").text(Questions[x].Answers[2]);
        $("#answer3").text(Questions[x].Answers[3]);
        console.log(Questions[x].Question)
        console.log(Questions[x].Answers)
        console.log(Questions[x].CorrectAnswer)
    }

    //FUNCTION FOR TIMER
    // Variables for timer
    var time = 45
    var interval;
    // Function to start timer
    function timer() {
            clearInterval(interval);
            interval = setInterval(decrement, 1000);
        }
        //  The lessen Function
    function decrement() {
        //Decrease time by one
        time--;
        // Display it
        $("#stopwatch").text(time);
        //  When you time = 0
        if (time === 0) {
            //add green background to the correct answer
            //find right answer and store it in var correct
            var correct = Questions[x].Answers.indexOf(Questions[x].CorrectAnswer)
            console.log(Questions[x].Answers)
            console.log(correct)
            //add green background
            $("#answer" + correct).addClass("greenbg")
            // clearInterval(interval);
            finishturn()
        }
    }

//FUNCTION TO START THE GAME
function start(){
  console.log("startgame")
  shuffle(Questions)
  console.log(Questions)
  //empty screen
  $("#title").empty()
  $("#description").empty()
  $("#titlecol").removeClass("bg-white bordercolor")
  $(".limit").removeClass("greenbg bordercolor")
  $("#desandsb").removeClass("bg-white bordercolor")
  $("#desandsbrow").addClass("newheight")
  $(".limit").empty()
  //  Display time
  $("#stopwatch").text(time);
  $("#timercol").addClass("py-2 bordercolor")
  push()
  timer()
}

// FUNCTIONS OF THINGS THAT NEED TO HAPPEN WHEN ANSWERS IS CLICKED REGRARDLESS OF THE ANSWER BEING CORRECT OR NOT
function finishturn(){
    //stop timer
    clearInterval(interval)
    //remove timer
    $("#stopwatch").empty()
    $("#timerrow").addClass("newheight")
    $("#timercol").removeClass("py-2 bordercolor")
    //remve blue hover
    $(".button").removeClass("bluehover")
    //add to x
    x++
    console.log("x is now " + x)
    //push next button
    $("#next").text("NEXT")
    $("#nextcol").addClass("py-2 bordercolor")
    //increase counter by 1
    counter++
    console.log("counter is now " + counter)
    //add to y
    y++
    console.log("y: " + y)
  }

  //FUNCTION TO RESET THE GAME
function reset(){
    $(".button").removeClass("greenbg")
    $(".button").removeClass("redbg")
    time = 45
    $("#stopwatch").text(time);
    $("#timercol").addClass("py-2 bordercolor")
    push()
    timer()
    y = 1
  }

//GAME
    //STARTER BUTTONS WITH NUMBER OF QUESIONS
    $("#5questions").on("click", function(){
        limit = 5
        start()
    })
    $("#10questions").on("click", function(){
        limit = 10
        start()
    })
    $("#20questions").on("click", function(){
        limit = 20
        start()
    })
    $("#50questions").on("click", function(){
        limit = 50
        start()
    })

    //CLICKING ON ANSWERS
    //variable to impede you from pushing .button when you have already guessed. 
    var y = 1
    // On Click function for answers
    $(".button").on("click", function(){
        console.log("You selected" + $(this).html())
        // console.log(Questions[x].CorrectAnswer)
        // console.log(this)
        if (y === 1){
            //if you are right:
            if ($(this).html() === Questions[x].CorrectAnswer){
                console.log("win")
                //add to the wins variable
                wins++
                console.log("wins: " + wins)
                //add a green background to the right answer
                //add a class
                $(this).addClass("greenbg")
                //Call function finish turn
                finishturn()
            }
            //if you are wrong 
            else{
                console.log("You loose")
                //add a red background to the selected answer
                $(this).addClass("redbg")
                //add green background to the correct answer
                //find right answer and store it in var correct
                var correct = Questions[x].Answers.indexOf(Questions[x].CorrectAnswer)
                //add green background
                $("#answer" + correct).addClass("greenbg")
                //Call function finish turn
                finishturn()
            }
        }
    })

//CLICKING ON NEXT
    $("#next").on("click", function(){
        if(counter === limit){
            console.log("Your Score: " + wins + "/" + counter);
            $("#question").text("Your Score: " + wins + "/" + counter);
            $(".button").empty()
            $(".buttoncol").removeClass("bordercolor")
            $(".button").removeClass("p-2")
            counter = 0
            $("#restart").text("RESTART");
            $("#restartcol").addClass("py-2 bordercolor");
            $("#stopwatch").empty()
            $("#timercol").removeClass("py-2 bordercolor")
            $("#next").empty()
            $("#nextcol").removeClass("py-2 bordercolor")
        }
        else{
            reset()
            $("#next").empty()
            $("#nextcol").removeClass("py-2 bordercolor")
        }
    })

//CLICKING ON RESTART
    $("#restart").on("click", function(){
        x = 0
        counter = 0
        y = 1
        $("#restart").empty()
        $("#restartcol").removeClass("py-2 bordercolor")
        $(".button").removeClass("greenbg")
        $(".button").removeClass("redbg")
        shuffle(Questions)
        start()
    })