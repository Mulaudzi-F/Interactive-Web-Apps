const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  }
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    // destructuring variable below

   const {firstName, surname, id, races }= athlete;

   // Accesing the date of the race
   const date = new Date(races[races.length - 1].date)
   const eventMonth = date.getMonth()
   const eventDay = date.getDay()
   const eventYear = date.getFullYear()
  
   // Acessing the time of the races
  const time = races[races.length - 1].time
  const sumTime = time.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // creating Elements
   const section = document.querySelector('section')
   const heading2 = document.createElement('h2');
    heading2.textContent = id;
    section.appendChild(heading2)
  
  const dd = document.createElement('dd')
  section.appendChild(dd)

  const dt = document.createElement('dt')
  dt.textContent = `Athlete: ${firstName} ${surname}`
  const dt2 = document.createElement('dt')
  dt2.textContent = `Total Races: ${races.length}`
  const dt3 = document.createElement('dt')
  dt3.textContent = `Event Date (Latest):${eventDay} ${(MONTHS[eventMonth])} ${eventYear}`
  const dt4 = document.createElement('dt')
  dt4.textContent = `Total Time (Latest): 00:${sumTime}`
  
  
  

//Apennding Elements


  dd.appendChild(dt)
  
  dd.appendChild(dt2)
  dd.appendChild(dt3)
  dd.appendChild(dt4)


  }
  
  createHtml(data.response.data.NM372)
  createHtml(data.response.data.SV782)


