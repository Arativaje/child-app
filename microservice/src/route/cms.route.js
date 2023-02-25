const express = require('express');
const cmsController = require('../controller/cms.controller');
const router = express.Router();

router.get('/',cmsController.getList);