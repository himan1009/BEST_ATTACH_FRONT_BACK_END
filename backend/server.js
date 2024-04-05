import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      "id": 1,
      "title": "First Entry",
      "content": "Lorem Ipsum"
    },
    {
      "id": 2,
      "title": "Second Entry",
      "content": "Dolor Sit Amet"
    },
    {
      "id": 3,
      "title": "Third Entry",
      "content": "Consectetur Adipiscing"
    },
    {
      "id": 4,
      "title": "Fourth Entry",
      "content": "Sed Do Eiusmod"
    },
    {
      "id": 5,
      "title": "Fifth Entry",
      "content": "Tempor Incididunt"
    },
    {
      "id": 6,
      "title": "Sixth Entry",
      "content": "Ut Labore Et"
    },
    {
      "id": 7,
      "title": "Seventh Entry",
      "content": "Dolore Magna Aliqua"
    },
    {
      "id": 8,
      "title": "Eighth Entry",
      "content": "Ut Enim Ad"
    },
    {
      "id": 9,
      "title": "Ninth Entry",
      "content": "Minim Veniam Quis"
    },
    {
      "id": 10,
      "title": "Tenth Entry",
      "content": "Nostrud Exercitation Ullamco"
    },
    {
      "id": 11,
      "title": "Eleventh Entry",
      "content": "Laboris Nisi Ut"
    },
    {
      "id": 12,
      "title": "Twelfth Entry",
      "content": "Aliquip Ex Ea"
    },
    {
      "id": 13,
      "title": "Thirteenth Entry",
      "content": "Commodo Consequat"
    },
    {
      "id": 14,
      "title": "Fourteenth Entry",
      "content": "Duis Aute Irure"
    },
    {
      "id": 15,
      "title": "Fifteenth Entry",
      "content": "Reprehenderit In Voluptate"
    },
    {
      "id": 16,
      "title": "Sixteenth Entry",
      "content": "Velit Esse Cillum"
    },
    {
      "id": 17,
      "title": "Seventeenth Entry",
      "content": "Dolore Eu Fugiat"
    },
    {
      "id": 18,
      "title": "Eighteenth Entry",
      "content": "Nulla Pariatur Excepteur"
    },
    {
      "id": 19,
      "title": "Nineteenth Entry",
      "content": "Occaecat Cupidatat Non"
    },
    {
      "id": 20,
      "title": "Twentieth Entry",
      "content": "Proident Sunt In"
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
