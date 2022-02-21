//Every year that is exactly divisible by four is a leap year, 
//except for years that are exactly divisible by 100, 
//but these centurial years are leap years if they are exactly divisible by 400. 
//For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));