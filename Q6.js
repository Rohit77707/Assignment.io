//Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.
var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Ujjwal',
        'marks': 80,
      },
      {
        'name': 'Anshul',
        'marks': 89,
      },
      {
        'name': 'Lasya',
        'marks': 77,
      },
      {
        'name': 'Ayush',
        'marks': 70,
      },
      {
       'name': 'Gourav',
       'marks': 90,
      },
      {
       'name': 'Niladri',
       'marks': 85,
      },
      {
       'name': 'Ugrasen',
       'marks': 87,
      }
    ],
  };

  for(var i=0; i<g_class.students.length;i=i+1)
  {
      if(g_class.students[i].marks>=85)
      {
          alert(g_class.students[i].name);
      }
  }