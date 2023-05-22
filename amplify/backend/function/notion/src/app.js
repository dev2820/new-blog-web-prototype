/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const NOTION_API_KEY = "secret_qbj6RqV0Q1oJ4OMGMJfpN62PVmy4QdEA4OWfgpFtKPs";

const express = require("express");
const bodyParser = require("body-parser");
const Client = require("@notionhq/client").Client;
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/page", async (req, res) => {
  // const { id: pageId } = req.query;
  // try {
  //   if (!!pageId) {
  //     const notionData = await getPageMeta(pageId);
  //     res.json(notionData);
  //   } else {
  //     const notionData = await getPageList();
  //     res.json(notionData);
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
  res.json({ success: "get call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
