# APIs Methods:

API methods are used to define the actions or functionalities that can be performed through an API (Application Programming Interface). These methods specify how different software components or systems can interact with each other, allowing them to exchange data, request services, or perform specific tasks

1. **GET**: This method requests data from a specified resource. It retrieves information from the server without altering anything.
2. **POST**: The POST method submits data to be processed to a specified resource. It often results in a change in server state or the creation of a new resource.

3. **PUT**: This method updates or replaces the entire resource at a specific URI. It's used to update existing data on the server.

4. **DELETE**: DELETE removes the specified resource from the server.

5. **PATCH**: The PATCH method is used to apply partial modifications to a resource. It's often used when you want to apply a partial update to a resource on the server.

6. **HEAD**: This method asks for a response identical to that of a GET request, but without the response body. It's useful for retrieving metadata about a resource without actually fetching its contents.

7. **OPTIONS**: OPTIONS returns the HTTP methods that the server supports for the specified URL. It can be used to check the functionality of a web server.

8. **TRACE**: TRACE echoes the received request so that the client can see what changes or additions have been made by intermediate servers. It's mainly used for diagnostic purposes.

These definitions describe the purpose and functionality of each API method.

---

# Simple Books API:

Here's an API where we will practice and clarify our concepts: `https://simple-books-api.glitch.me`.

## Base URL & EndPoints.

APIs (Application Programming Interfaces) are software interfaces that allow different software components to communicate and interact. An API typically consists of a base URL and endpoints.

1. **Base URL**: The base URL is the main URL of the API server where it can be accessed. It serves as the address of the API server. Example: `https://api.example.com`.

2. **Endpoints**: Endpoints represent specific functionalities or resources of the API. Each endpoint is a unique URL that comes after the base URL. Each endpoint allows performing a specific action, such as retrieving data, updating, or deleting. Example: `/users`, `/products`, `/orders`.

To use an API, you send requests to the base URL with one or more specified endpoints. Specific HTTP methods like GET, POST, PUT, DELETE, etc., are used to retrieve or manipulate data related to endpoints.

---

# Let's understand how API Method work.

To understand how APIs mnethod work we can use thunder client API.

## Get Method:

### Request to Base API:

Sab se phele ham thunder cliewnt ko use krte huwe ak new request bnaye ge jo get ke request send kr ga and iske response mn hame ak object mile ga jis mn key value pair mn ak message hoga `{"message": "Welcome to the Simple Books API."}`

```ts
// Step01:
// thunder client se new request bnaye and usmn det a methig use kren and usko `https://simple-books-api.glitch.me` ye API de and request send kr den then is request ke responce mn hame ye object mile ga.

{
  "message": "Welcome to the Simple Books API."
}
```

### Request to specific end point to get list of books:

So ab ham us base url mn ak end point add kre ge `/books` ka jis se ham Books ka data get kr sakte hn easily so ham ne request kuske response mn hame hamare data mil gya jo ak array he different objects ke.

```ts
[
  {
    id: 1,
    name: "The Russian",
    type: "fiction",
    available: true,
  },
  {
    id: 2,
    name: "Just as I Am",
    type: "non-fiction",
    available: false,
  },
  {
    id: 3,
    name: "The Vanishing Half",
    type: "fiction",
    available: true,
  },
  {
    id: 4,
    name: "The Midnight Library",
    type: "fiction",
    available: true,
  },
  {
    id: 5,
    name: "Untamed",
    type: "non-fiction",
    available: true,
  },
  {
    id: 6,
    name: "Viscount Who Loved Me",
    type: "fiction",
    available: true,
  },
];
```

### Request to specific end point to Get a single book:

So ab ham us base url mn ak end point add kre ge `/books/5` basically books ke bad jo ham end point add ker ge wp ak specific book ke id hoge jis se hame us boook ka data mil jayega so ham ne request ke response mn hame hamare book ka data mil gya jo ak object ke form mn he.

```ts
{
  "id": 5,
  "name": "Untamed",
  "author": "Glennon Doyle",
  "type": "non-fiction",
  "price": 15.5,
  "current-stock": 20,
  "available": true
}
```

## Post Method.

### API Authentication & Post an order:
so ab is se phele to ham simple data ko get kr rhe the to hame authentication ke need nhi the ab ham ne book ko order krna he to uske liye hame authentication ke need hoge kyu ke jab tk ham autheticated nhi hoge hamare identification nhi hoge to ham order nhi kr ske ge 

#### API Authentication 
so ab hame is base url mn end point add kre ge `/api-clients/` is end point ko use krke ham is API pr authentication kr sakte hn and is url pr request krne se phele hame apna data bhi sath post krna pre ga uske liye ham iske body mn ak object post kre ge then request kr denge and is request ke response mn hame hamare authentication ka token mil jayega.

```ts
// Step1:
// Post Request:
// https://simple-books-api.glitch.me//api-clients/

// step02:
// Iske body mn data post kre ge ak object ke form mn,
{
   "clientName": "ARehman",
   "clientEmail": "ARehman@example.com"
}

// Step03:
// and iske responce mn hame ak token mile ga jo object ke form mn he jis ko ham further use kre ge. 

{
  "accessToken": "65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9"
}

```

### Request to specific end point to Post an order:
so ab hame is base url mn end point add kre ge `/orders` is end point ko use krke ham is API pr order post kr sakte hn and is url pr request krne se phele hame apna data bhi sath post krna pre ga uske liye ham iske body mn ak object post kre ge then and apna authentication token bhi auth ke baerar mn add kre ge then request kr denge and is request ke response hame order ke conformation ho jayege.

```ts
// Step1.
// Post Request. 
// https://simple-books-api.glitch.me/orders


// Step2.
// Iske bad ham body mn book id and customer name btaye ge.

{
  "bookId": 1,
  "customerName": "John"
}

// Step3.
// Than ham Auth ke andar hamare jo token hoga authentication ka woo bhi denge takehamare identification ho jaye.

// 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9

// step4.
// Than hame response mn conformation ho jayege hamare order post ho gya he 

{
  "created": true,
  "orderId": "sfLWJYXFMEShxooNtlooq"
}

```
