# x-education

### github repo link : https://github.com/RafiulAlam98/rainier-technologies
### Live Link https://rainier-tech.vercel.app/


### All Routes for X-Education

# Application Routes:

### Course
- https://rainier-tech.vercel.app/api/course [create course] (POST)
- https://rainier-tech.vercel.app/api/course [get all course] (GET)
- https://rainier-tech.vercel.app/api/course/65813ed3ac3ba17acaade119 [get Single course] (GET)
- https://rainier-tech.vercel.app/api/course/65813ed3ac3ba17acaade119 (Update Single course) (PATCH)
- https://rainier-tech.vercel.app/api/course/65813ed3ac3ba17acaade119 [Delete Single course] (DELETE)

### Sample Course Schema
```
{
"name": "Introduction to Web Development",
"description": "A Comprehensive Introduction to Web Development.",
"price": 5000 BDT,
"duration": "8 weeks",
"level": "Beginner",
"topics": ["HTML", "CSS", "JavaScript", “Vue.js” ,"Node.js", "Express.js", "RESTful APIs"],
"schedule": {
"startDate": "2023-02-15",
"endDate": "2023-04-10",
"classDays": ["Monday", "Wednesday", "Friday"],
"classTime": "18:00 - 20:00"
}
}
```

### Admin
- https://rainier-tech.vercel.app/api/admins/create-admin (post)[add Admin]
  
### Auth Login
- https://rainier-tech.vercel.app/api/auth/login (post)[admin login]

### Sample Admin Add and Login
```
{
    "email": "admin@admin.com",
    "password": "admin1234"
}
```
{
  "cow": "65200deb815549cee5d05da4",
  "buyer": "65200e1b815549cee5d05dac"
}
```
