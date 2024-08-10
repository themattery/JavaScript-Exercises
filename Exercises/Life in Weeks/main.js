function lifeInWeeks(age) {

        var standardDays = 90 * 365;
        var standardWeeks = 90 * 52;
        var standardMonths = 90 * 12;
        
        var daysLeft = standardDays - (age * 365);
        var weeksLeft = standardWeeks - (age * 52);
        var monthsLeft = standardMonths - (age * 12);
        console.log(`You have ${daysLeft} days, OR ${weeksLeft} weeks, OR ${monthsLeft} months left.`);
        
    }
    
    