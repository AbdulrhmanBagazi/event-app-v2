import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Goldie Buckley',
    email: 'goldiebuckley@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Hubbard Riddle',
    email: 'hubbardriddle@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Decker Cantrell',
    email: 'deckercantrell@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Mcmillan Dillard',
    email: 'mcmillandillard@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Henderson Jacobs',
    email: 'hendersonjacobs@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Rhoda Doyle',
    email: 'rhodadoyle@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Ila Simpson',
    email: 'ilasimpson@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Deana Tate',
    email: 'deanatate@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Rosa Waller',
    email: 'rosawaller@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Kinney Stark',
    email: 'kinneystark@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Griffin Haney',
    email: 'griffinhaney@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Anastasia Holmes',
    email: 'anastasiaholmes@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Gloria Leach',
    email: 'glorialeach@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Cindy West',
    email: 'cindywest@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Hazel Watkins',
    email: 'hazelwatkins@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Holman Dillon',
    email: 'holmandillon@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Sweet Montgomery',
    email: 'sweetmontgomery@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Mooney Cardenas',
    email: 'mooneycardenas@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Betty Schneider',
    email: 'bettyschneider@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Helen Chapman',
    email: 'helenchapman@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Bobbie Ruiz',
    email: 'bobbieruiz@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Ashlee Hancock',
    email: 'ashleehancock@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Gamble Weiss',
    email: 'gambleweiss@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Letitia Skinner',
    email: 'letitiaskinner@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Harrell Hooper',
    email: 'harrellhooper@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Blanche Mccarthy',
    email: 'blanchemccarthy@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Fuentes Weaver',
    email: 'fuentesweaver@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Rogers Sweeney',
    email: 'rogerssweeney@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Shanna Mclean',
    email: 'shannamclean@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Rowland Reilly',
    email: 'rowlandreilly@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Cassandra Rosales',
    email: 'cassandrarosales@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Sofia Carroll',
    email: 'sofiacarroll@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Stanton Nixon',
    email: 'stantonnixon@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Alta Rowland',
    email: 'altarowland@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Patel Sexton',
    email: 'patelsexton@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Annette Floyd',
    email: 'annettefloyd@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Nixon Clemons',
    email: 'nixonclemons@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Wooten Thomas',
    email: 'wootenthomas@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Tamera Gutierrez',
    email: 'tameragutierrez@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Rush Barr',
    email: 'rushbarr@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Battle Delacruz',
    email: 'battledelacruz@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Dianna Spencer',
    email: 'diannaspencer@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Bright Mcgee',
    email: 'brightmcgee@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Alba Farmer',
    email: 'albafarmer@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Poole Mcintyre',
    email: 'poolemcintyre@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Delgado Barber',
    email: 'delgadobarber@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Hayden Baldwin',
    email: 'haydenbaldwin@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Keller Terry',
    email: 'kellerterry@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Nina Nelson',
    email: 'ninanelson@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Barbra Decker',
    email: 'barbradecker@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Cheri Yang',
    email: 'cheriyang@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Georgette Cote',
    email: 'georgettecote@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Prince Herman',
    email: 'princeherman@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Angel Ross',
    email: 'angelross@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Angie Barrett',
    email: 'angiebarrett@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Amalia Holcomb',
    email: 'amaliaholcomb@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Celia Dawson',
    email: 'celiadawson@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Wright Alexander',
    email: 'wrightalexander@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Hanson Wong',
    email: 'hansonwong@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Vilma Pollard',
    email: 'vilmapollard@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Mullen Lambert',
    email: 'mullenlambert@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Duran Ramsey',
    email: 'duranramsey@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Larsen Kent',
    email: 'larsenkent@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Washington Mayer',
    email: 'washingtonmayer@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Salinas Palmer',
    email: 'salinaspalmer@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Wilkinson Larson',
    email: 'wilkinsonlarson@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Juliet Haynes',
    email: 'juliethaynes@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Renee Ray',
    email: 'reneeray@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Morrison Case',
    email: 'morrisoncase@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Glenna Caldwell',
    email: 'glennacaldwell@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Mckay Vargas',
    email: 'mckayvargas@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Downs Sosa',
    email: 'downssosa@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Allyson Cole',
    email: 'allysoncole@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Adriana Goff',
    email: 'adrianagoff@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Cecelia Campos',
    email: 'ceceliacampos@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Guerrero Curtis',
    email: 'guerrerocurtis@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Hart Graham',
    email: 'hartgraham@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Bertie Koch',
    email: 'bertiekoch@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Nancy Bishop',
    email: 'nancybishop@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Gwendolyn Deleon',
    email: 'gwendolyndeleon@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Howell Moon',
    email: 'howellmoon@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Miller Donovan',
    email: 'millerdonovan@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Roth Hamilton',
    email: 'rothhamilton@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Patrick Nicholson',
    email: 'patricknicholson@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Landry Neal',
    email: 'landryneal@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Alexis Craig',
    email: 'alexiscraig@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Tricia Franks',
    email: 'triciafranks@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Wall Herrera',
    email: 'wallherrera@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Debora Poole',
    email: 'deborapoole@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Penelope Barry',
    email: 'penelopebarry@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Rosario Barrera',
    email: 'rosariobarrera@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Witt Chang',
    email: 'wittchang@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Glass Mcbride',
    email: 'glassmcbride@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Christian Ayers',
    email: 'christianayers@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Gina Morris',
    email: 'ginamorris@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Merrill Pate',
    email: 'merrillpate@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Lorraine Clay',
    email: 'lorraineclay@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
  {
    name: 'Castaneda Atkinson',
    email: 'castanedaatkinson@imperium.com',
    password: '$argon2id$v=19$m=4096,t=3,p=1$4oM176VB+uwPAMFv/OVJ3w$rfeT/r9QuhXePfQQdndM8evPo5VdSsAyLCxONCcXEhw',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  // eslint-disable-next-line no-loops/no-loops
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
