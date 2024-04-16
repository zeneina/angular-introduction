export interface Person {
  givenName: string;
  surName: string;
  age: number;
  email: string;
  address: string;
<<<<<<< HEAD
}

export interface EPerson {
  givenName: string;
  surName: string;
  age: string;
  email: string;
  education: string;
}

export const ManyPerson: EPerson[] = [
  {
    givenName: 'Steven',
    surName: 'Bailey',
    age: '41',
    email: 'stevenbailey@aol.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Emma',
    surName: 'Perry',
    age: '27',
    email: 'emma.sue.perry@yahoo.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Chelsea',
    surName: 'Wright',
    age: '68',
    email: 'c.wright@hotmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Mark',
    surName: 'Bell',
    age: '50',
    email: 'markbell@hotmail.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Danielle',
    surName: 'Russell',
    age: '18',
    email: 'danielle95@ymail.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Kaitlyn',
    surName: 'Thompson',
    age: '60',
    email: 'k_s@live.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Eric',
    surName: 'Parker',
    age: '56',
    email: 'e.e.parker@aol.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Brian',
    surName: 'Russell',
    age: '25',
    email: 'brian_russell@aol.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'David',
    surName: 'Alexander',
    age: '69',
    email: 'davidalexander@live.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Lillian',
    surName: 'Clark',
    age: '61',
    email: 'l_l_clark90@live.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Natalie',
    surName: 'Martin',
    age: '30',
    email: 'n_r_martin@ymail.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'James',
    surName: 'Hill',
    age: '46',
    email: 'jhill@outlook.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Claire',
    surName: 'Flores',
    age: '20',
    email: 'claire_flores@gmail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Emma',
    surName: 'Ward',
    age: '62',
    email: 'e_k@rocketmail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Andrew',
    surName: 'Carter',
    age: '25',
    email: 'andrewcarter10@hotmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Danielle',
    surName: 'Lopez',
    age: '27',
    email: 'd.l.lopez@aol.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Amelia',
    surName: 'Ross',
    age: '45',
    email: 'amelia.renee.ross@live.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Kyle',
    surName: 'Bryant',
    age: '61',
    email: 'k_bryant@outlook.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Dylan',
    surName: 'Patterson',
    age: '51',
    email: 'dylan.patterson@aol.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Kevin',
    surName: 'Jenkins',
    age: '54',
    email: 'kevin_jenkins@aol.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Joshua',
    surName: 'Robinson',
    age: '73',
    email: 'jrobinson@ymail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Megan',
    surName: 'Harris',
    age: '73',
    email: 'meganharris@aol.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Tyler',
    surName: 'Sanchez',
    age: '48',
    email: 'tylerasanchez@yahoo.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Elizabeth',
    surName: 'Rogers',
    age: '51',
    email: 'e.l.rogers@aol.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Michelle',
    surName: 'Harris',
    age: '69',
    email: 'm.l.harris@yahoo.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Julian',
    surName: 'Price',
    age: '40',
    email: 'julian.price@hotmail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Amber',
    surName: 'Richardson',
    age: '67',
    email: 'a.richardson84@aol.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Aiden',
    surName: 'Phillips',
    age: '55',
    email: 'aidenephillips@gmail.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Isaac',
    surName: 'Barnes',
    age: '61',
    email: 'iwbarnes62@outlook.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Evelyn',
    surName: 'Sanchez',
    age: '43',
    email: 'emsanchez@outlook.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Rachel',
    surName: 'Reed',
    age: '67',
    email: 'r_r_reed@rocketmail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Jack',
    surName: 'Ramirez',
    age: '50',
    email: 'jackfrancisramirez@hotmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Brian',
    surName: 'Baker',
    age: '47',
    email: 'b_e_baker86@outlook.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Timothy',
    surName: 'Parker',
    age: '69',
    email: 'timothyrichard@yahoo.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Justin',
    surName: 'Hernandez',
    age: '29',
    email: 'j.hernandez41@hotmail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Isabella',
    surName: 'Rivera',
    age: '18',
    email: 'i_rivera@yahoo.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Kimberly',
    surName: 'Hall',
    age: '58',
    email: 'kimberly_mae_hall91@live.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Brianna',
    surName: 'Bennett',
    age: '77',
    email: 'brianna@rocketmail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Steven',
    surName: 'Wilson',
    age: '38',
    email: 'sjwilson@hotmail.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Tyler',
    surName: 'Moore',
    age: '33',
    email: 'tylerlmoore@aol.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Jonathan',
    surName: 'Moore',
    age: '25',
    email: 'jmoore@rocketmail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Steven',
    surName: 'Parker',
    age: '51',
    email: 'steven.a.parker@hotmail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Amber',
    surName: 'Evans',
    age: '33',
    email: 'amber.g.evans@yahoo.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Emily',
    surName: 'Washington',
    age: '31',
    email: 'ewashington@ymail.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Jennifer',
    surName: 'Simmons',
    age: '48',
    email: 'j_simmons@hotmail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Katherine',
    surName: 'Griffin',
    age: '68',
    email: 'katherine_griffin@yahoo.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Mary',
    surName: 'Bailey',
    age: '63',
    email: 'mary.bailey@outlook.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Chelsea',
    surName: 'Bennett',
    age: '73',
    email: 'c.m.bennett@hotmail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Grace',
    surName: 'Rodriguez',
    age: '68',
    email: 'gracerodriguez39@ymail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Danielle',
    surName: 'Collins',
    age: '55',
    email: 'drcollins91@aol.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Dylan',
    surName: 'Phillips',
    age: '42',
    email: 'dylanphillips@live.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'David',
    surName: 'Moore',
    age: '68',
    email: 'davidemoore@hotmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Jennifer',
    surName: 'Adams',
    age: '21',
    email: 'jennifer.r.adams@live.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Sarah',
    surName: 'Gonzales',
    age: '71',
    email: 'sarah.l.gonzales@hotmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Brandon',
    surName: 'Rivera',
    age: '66',
    email: 'b_rivera68@rocketmail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Emma',
    surName: 'Rodriguez',
    age: '41',
    email: 'e_rodriguez@outlook.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Jeremy',
    surName: 'Ross',
    age: '74',
    email: 'j.ross@outlook.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Melissa',
    surName: 'James',
    age: '75',
    email: 'melissa.james@yahoo.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Sophia',
    surName: 'Rodriguez',
    age: '26',
    email: 's_r_rodriguez47@ymail.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Alyssa',
    surName: 'Hernandez',
    age: '59',
    email: 'alyssa.l.hernandez@gmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Danielle',
    surName: 'Ross',
    age: '34',
    email: 'danielle.ross@aol.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Isabella',
    surName: 'King',
    age: '39',
    email: 'isabellaking@ymail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Haley',
    surName: 'Cox',
    age: '58',
    email: 'haleymcox@ymail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Kimberly',
    surName: 'Green',
    age: '54',
    email: 'kimberly.green@outlook.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Henry',
    surName: 'Rivera',
    age: '66',
    email: 'henry.rivera9@yahoo.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Zachary',
    surName: 'Hernandez',
    age: '43',
    email: 'zachary.michael.hernandez15@yahoo.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Sofia',
    surName: 'Price',
    age: '32',
    email: 'sofia.price@rocketmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Ethan',
    surName: 'Gray',
    age: '77',
    email: 'ethan_gray70@live.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Amelia',
    surName: 'Coleman',
    age: '18',
    email: 'amelia.coleman@outlook.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Jose',
    surName: 'Kelly',
    age: '27',
    email: 'j.kelly@gmail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Aaron',
    surName: 'Peterson',
    age: '32',
    email: 'arpeterson32@aol.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Taylor',
    surName: 'Simmons',
    age: '64',
    email: 'taylor.irene.simmons70@yahoo.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Kelsey',
    surName: 'Price',
    age: '27',
    email: 'kelseyprice85@ymail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Lauren',
    surName: 'Evans',
    age: '33',
    email: 'laurenevans@yahoo.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Laura',
    surName: 'Henderson',
    age: '58',
    email: 'laura_l_henderson@aol.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Dylan',
    surName: 'Moore',
    age: '26',
    email: 'dylanjamesmoore@yahoo.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Aubrey',
    surName: 'Wilson',
    age: '77',
    email: 'a.wilson@ymail.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Christina',
    surName: 'Hall',
    age: '64',
    email: 'christina_a_hall@ymail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Joshua',
    surName: 'Green',
    age: '40',
    email: 'joshualgreen@yahoo.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Michael',
    surName: 'Jackson',
    age: '77',
    email: 'mjackson@gmail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'James',
    surName: 'Lee',
    age: '48',
    email: 'jlee@yahoo.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Courtney',
    surName: 'Johnson',
    age: '38',
    email: 'courtney.johnson66@ymail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Sofia',
    surName: 'Miller',
    age: '21',
    email: 's.miller@ymail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Matthew',
    surName: 'Price',
    age: '18',
    email: 'm.price@ymail.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Samuel',
    surName: 'Bailey',
    age: '58',
    email: 's.e.bailey@outlook.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Anna',
    surName: 'Parker',
    age: '63',
    email: 'a_parker@gmail.com',
    education: 'Less than high school',
  },
  {
    givenName: 'Lauren',
    surName: 'Mitchell',
    age: '67',
    email: 'l_j_mitchell@ymail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Grace',
    surName: 'Hayes',
    age: '59',
    email: 'grace.rose.hayes12@outlook.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Benjamin',
    surName: 'Young',
    age: '51',
    email: 'benjamin_g_young53@yahoo.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Victoria',
    surName: 'Lee',
    age: '62',
    email: 'v.lee@live.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Jonathan',
    surName: 'Mitchell',
    age: '43',
    email: 'jmitchell75@rocketmail.com',
    education: 'Associate degree',
  },
  {
    givenName: 'Alyssa',
    surName: 'Bennett',
    age: '27',
    email: 'alyssa.lou.bennett@ymail.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Kyle',
    surName: 'Perry',
    age: '76',
    email: 'kyleperry@ymail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Abigail',
    surName: 'Flores',
    age: '68',
    email: 'akflores@yahoo.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Amber',
    surName: 'Ward',
    age: '52',
    email: 'a.ward@gmail.com',
    education: 'High school diploma or equivalent',
  },
  {
    givenName: 'Oliver',
    surName: 'Ramirez',
    age: '38',
    email: 'oramirez@ymail.com',
    education: 'Bachelor’s degree',
  },
  {
    givenName: 'Jonathan',
    surName: 'Murphy',
    age: '50',
    email: 'jonathan_alan_murphy52@rocketmail.com',
    education: 'Master’s degree',
  },
  {
    givenName: 'Courtney',
    surName: 'Russell',
    age: '69',
    email: 'c.m.russell88@ymail.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Victoria',
    surName: 'Bennett',
    age: '39',
    email: 'victoria_bennett@rocketmail.com',
    education: 'Doctoral degree',
  },
  {
    givenName: 'Eric',
    surName: 'Jackson',
    age: '22',
    email: 'eric_richard_jackson@yahoo.com',
    education: 'Associate degree',
  },
];
=======
}
>>>>>>> f87d793613e515dad3d082dfeaec621a001d361f
