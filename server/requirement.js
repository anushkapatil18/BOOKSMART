/*

User:
googleId: String,
displayName: String,
firstName: String,
lastName: String,
img: String,
createdAt: number

Story:
Title: String,
body: String,
status: string,
user: refer User schema,
createdAt: number,


Login:
GET - login pg('localhost:3000/')
GET - after login and AOAuth (redirect to dashboard)
GET - after logout back to the first page('localhost:3000/')

Updates:
GET - update pg('localhost:3000/dashboard')

Stories:
GET - show all stories with last added the first form('localhost:3000/stories') 
GET - show particular story based on id('localhost:3000/stories/${id}) param: id
GET - to add story open page to add the content
POST - to process the content added int the add page
GET - to edit the story ('localhost:3000/edit/${id}) param: id
PUT - to update the edited page (redirected to the dashboard)
DELETE - delete a particular story
Get - show all stories of a prticular user('localhost:3000/stories/${id})
*/