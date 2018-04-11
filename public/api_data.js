define({ "api": [
  {
    "type": "post",
    "url": "api_auth/login_api/",
    "title": "Login",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "Authentication",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"Staff\":{\n          \"username\":\"adminA\",\n          \"password\":\"admin\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"msg\": \"Signed in successfully.\",\n      \"token\": \"eyJ0eXAiOiJKV1sQiLCJhbGciJIUzI1NiJ9.ey2JqdGkiOiI0cnRDN2lFcFpzZUgwcUZXczdob2F4eDlaaUdcL2syc1M3ME1JMjRQUit0QT0iLCJpc3MiOiJzaGlwcGluZy1zdWl0ZS5tZSIsImlhdCI6MTUxNDgxMDg3OCwiZXhwIjoxNTE3NDAyODg4LCJkYXRhIjp7IlN0YWZmIjp7ImlkIjoiMSIsIm5hbWUiOiJTcHJpbmd5IiwiZG9iIjoiMTk4Ny0wMy0xMSIsInBlcnNvbmFsX3Bob25lIjoiMDEwMDk1NjIxMjQiLCJvdGhlcl9waG9uZV9udW1iZXJzIjoiIiwid29ya19waG9uZV9leHQiOiIzMzMgXC8gNzc3Iiwid29ya19tYWlsIjoiYWhtZWRAbWVtcGhpc3RvdXJzLmNvbSIsInN5c3RlbV9tYWlsIjoibXRlQG1lbXBoaXN0b3Vycy5jb20iLCJwZXJzb25hbF9tYWlsIjoiYXltYW5yYkBnbWFpbC5jb20iLCJhZGRyZXNzIjoiQTEsIE5ldyBBd2thZiBCdWlsZGluZ3MsIEhhZGF5ZWsgRWwgS29iYSwgQ2Fpcm8sIEVneXB0IiwiZW1wbG95bWVudF9kYXRlIjoiMjAwMy0wMi0wMSIsImxhc3RfbG9naW4iOiIyMDEyLTAxLTA1IDEzOjE3OjIxIiwiY3JlYXRlZCI6IjIwMDktMDctMTAgMTk6MTM6NTMiLCJtb2RpZmllZCI6IjIwMTctMTAtMjkgMTE6NTM6NDIiLCJ1c2VybmFtZSI6ImFkbWluQSIsInBhc3N3b3JkIjoiMGUyZWIwYTFiNjBlNTA2NjAzYjk0ZDQ4NmMyNjM3ODdmOWM0OGViMSIsImJyYW5jaF9pZCI6IjEiLCJhY3RpdmUiOnRydWUsImlzX3Zpc2libGUiOnRydWUsIm9ubGluZSI6dHJ1ZSwic2lnbmF0dXJlIjoiIiwiYXNzaWduZWRfcmVxdWVzdHMiOiIwIiwibWFuYWdlcl9pZCI6IjMiLCJ0aW1lX3NoZWV0X2lkIjoiMTEiLCJzaGVldF9pZCI6bnVsbCwidG9rZW5fYWN0aXZlIjoiMjAxNy0xMC0yOSAxMjo1Mzo0MiIsIndzX3Rva2VuIjoiVnNHRVBCSVk1U2JUSypHW2h7ejNka1d7ZmdGN0xJczEiLCJsYXN0X3Bhc3N3b3JkX2NoYW5nZWQiOiIyMDE3LTA5LTA2IDE1OjA0OjI0IiwiY29tcGFueV9pZCI6IjEiLCJmb3JjZV9wYXNzd29yZF9jaGFuZ2UiOmZhbHNlLCJwdXNoX2J1bGxldF90b2tlbiI6Ik9tZ2lEaE5JenlXT1k4c29EM2hsUkszaEUwU2ptTmp0IiwiaXNfYWNjZXNzaWJsZSI6dHJ1ZSwiYWxsb3dfaXBzIjpudWxsfX19.oXv1O7oIMr6UgPucWHrKlrpK62ue7eddnEqKYVl0pg8\",\n      \"username\": \"your username\",\n      \"name\": \"your name\",\n      \"job_title\": \"IT Manager\",\n      \"job_title_id\": \"6\",\n      \"work_email\": \"ahmed@ex.com\",\n      \"photo\": \"https:\\/\\/shipping-suite.me\\/permFiles\\/images\\/Staff\\/original\\/1.jpg?no-cache=18010102\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"This username doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthenticated\n{\n  \"msg\": \"Invalid password for this username\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "POST",
    "url": "/users/sign-up/:code",
    "title": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory Code for invitation .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t \"Staff\": {\n\t \t\"name\": \"Mohamed Maged\",\n\t \t\"dob\": \"1996-11-18\",\n\t \t\"password\": \"123gha\",\n     \"confirm_password\": \"123gha\",\n\t \t\"personal_email\": \"megzz@gmail.com\",\n\t \t\"username\": \"megz_1\",\n\t \t\"address\": \"Makrm ebid, Nasr City\",\n\t \t\"personal_phone\": \"012973187\"\n\t }\n}",
          "type": "json"
        }
      ]
    },
    "name": "Register",
    "group": "Authentication",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n     \"msg\": \"Signed up successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  \"msg\": \"You are not invited to join the system.\",\n  \"errors\": {\n      \"msg\": \"Your key is invalid.\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "GET",
    "url": "/cities/all",
    "title": "List Cities",
    "name": "ListCities",
    "group": "Cities",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional limit number default set to 200</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>Optional Query Param for Search countries</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n  \t\"cities\": [\n  \t\t{\n  \t\t\t\"id\": \"233\",\n  \t\t\t\"name\": \" ABHA \"\n  \t\t}\n  \t],\n  \t\"limit\": \"2\",\n  \t\"msg\": \"fetched cities!\",\n  \t\"count\": 1,\n  \t\"current_page\": 1,\n  \t\"last_page\": 1\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Cities"
  },
  {
    "type": "GET",
    "url": "/cities/names",
    "title": "List Names",
    "name": "ListCitiesNames",
    "group": "Cities",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"msg\": \"Fetched cities\",\n  \"Cities\": {\n     \"1\": \"Cairo\",\n     \"2\": \"Alexandria\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Cities"
  },
  {
    "type": "post",
    "url": "/clients/main",
    "title": "Create Client",
    "version": "0.1.0",
    "name": "CreateNewClient",
    "group": "Clients",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"Client\":\n    {\n       \"address\": \"6th of october\",\n       \"country_id\": 2,\n       \"email\": \"mob@deemalab.com\",\n       \"name\": \"yasminemOBx\",\n       \"phone\": \"0113214135\",\n       \"crm_organization_id\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n  {\n      \"msg\": \"Client successfully added.\",\n      \"ClientInfo\": {\n        \"Client\": {\n        \"id\": \"318893\",\n        \"name\": \"yasmineOBx\",\n        \"email\": \"amin@deemalab.com\",\n        \"phone\": \"0113214135\",\n        \"country_id\": \"2\",\n        \"address\": \"Masrgg El Gedida\",\n        \"passport_no\": null,\n        \"passport_issue_date\": null,\n        \"passport_expiry_date\": null,\n        \"client_group_id\": null,\n        \"payment_terms\": null,\n        \"is_visible\": true,\n        \"tax_card_num\": null,\n        \"city_id\": null,\n        \"dob\": null,\n        \"crm_points\": \"0\",\n        \"is_corporate\": false,\n        \"mobile\": null,\n        \"created_by\": \"1\",\n        \"crm_organization_id\": \"1\"\n     },\n     \"createdBy\": {\n        \"id\": \"1\",\n        \"name\": \"Yasmine Alaa\",\n        \"dob\": \"1987-03-11\",\n        \"personal_phone\": \"0101508076\",\n        \"other_phone_numbers\": \"\",\n        \"work_phone_ext\": \"333 / 777\",\n        \"work_mail\": \"\",\n        \"system_mail\": \"\",\n        \"personal_mail\": \"yasmine@deemalab.com\",\n        \"address\": \"A1, New Awkaf Buildings, Hadayek El Koba, Cairo, Egypt\",\n        \"employment_date\": \"2003-02-01\",\n        \"last_login\": \"2012-01-05 13:17:21\",\n        \"created\": \"2009-07-10 19:13:53\",\n        \"modified\": \"2018-01-30 11:26:52\",\n        \"username\": \"yasmine\",\n        \"password\": \"0e2eb0a1b60e506603b94d486c263787f9c48eb1\",\n        \"branch_id\": \"1\",\n        \"active\": true,\n        \"is_visible\": true,\n        \"online\": true,\n        \"signature\": \"\",\n        \"assigned_requests\": \"0\",\n        \"manager_id\": \"3\",\n        \"time_sheet_id\": \"11\",\n        \"sheet_id\": null,\n        \"token_active\": \"2018-01-30 12:26:52\",\n        \"ws_token\": \">[gahB;gx&VE6g.sGVKWpEHWAwCJ$4O1\",\n        \"last_password_changed\": \"2016-08-16 10:25:17\",\n        \"company_id\": \"1\",\n        \"force_password_change\": false,\n        \"push_bullet_token\": \"OmgiDhNIzyWOY8soD3hlRK3hE0SjmNjt\",\n        \"is_accessible\": true,\n        \"allow_ips\": null\n      },\n      \"Country\": {\n        \"name\": \"Afghanistan\"\n      },\n      \"ClientGroup\": {\n        \"group_name\": null\n      },\n      \"CrmOrganization\": {\n        \"id\": \"1\",\n        \"name\": \"dlc travel tech test\",\n        \"email\": \"dlc@ddtt.com\",\n        \"phone\": \"87652097\",\n        \"mobile\": \"74635329\",\n        \"address\": \"maadi st\",\n        \"description\": \"travel tech company\",\n        \"city_id\": \"162\",\n        \"country_id\": \"224\",\n        \"created_by\": \"1\",\n        \"is_visible\": false,\n        \"created\": null,\n        \"modified\": \"2018-01-20 15:20:34\",\n        \"Country\": {\n           \"id\": \"224\",\n           \"name\": \"United Arab Emirates\",\n           \"iso_alpha2\": \"AE\",\n           \"iso_alpha3\": \"ARE\",\n           \"iso_numeric\": \"784\",\n           \"currency_code\": \"AED\",\n           \"currency_name\": \"Dirham\",\n           \"currrency_symbol\": \"\",\n           \"flag\": \"AE.png\",\n           \"nationality\": \"Emirati\"\n         },\n        \"City\": {\n           \"id\": \"162\",\n           \"parent_id\": \"0\",\n           \"name\": \"Dubai\",\n           \"branch_id\": \"0\",\n           \"country_id\": \"224\",\n           \"is_visible\": true,\n           \"lat\": null,\n           \"lng\": null\n         }\n     },\n     \"Request\": [],\n         \"ClientContact\": [],\n         \"ClientAddress\": []\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": \"Client was not created.\",\n  \"errors\": {\n     \"name\": [\n         \"You already have this name added\"\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "put",
    "url": "/clients/customer-status/:client_id/:flag",
    "title": "Customer Status",
    "version": "0.1.0",
    "name": "CustomerStatus",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Mandatory ClientID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>Mandatory vALUES [1 for Customer , 0 for Lead]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"msg\": \"Successfully updated the customer status!\",\n  \"Client\": {\n      \"id\": \"318888\",\n      \"name\": \"yasmine alaa eldin\",\n      \"email\": \"yasmine@deemalab.com\",\n      \"phone\": \"\",\n      \"country_id\": \"64\",\n      \"address\": null,\n      \"passport_no\": null,\n      \"passport_issue_date\": null,\n      \"passport_expiry_date\": null,\n      \"client_group_id\": null,\n      \"payment_terms\": null,\n      \"is_visible\": true,\n      \"tax_card_num\": null,\n      \"city_id\": null,\n      \"dob\": null,\n      \"crm_points\": \"0\",\n      \"is_corporate\": false,\n      \"mobile\": null,\n      \"created_by\": null,\n      \"crm_organization_id\": null,\n     \"is_customer\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Clients"
  },
  {
    "type": "delete",
    "url": "/clients/main/:id",
    "title": "Delete Client",
    "version": "0.1.0",
    "name": "DeleteClient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client ID</p>"
          }
        ]
      }
    },
    "group": "Clients",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n \"msg\": \"Client successfully deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/main/",
    "title": "Delete Multiple Clients",
    "version": "0.1.0",
    "name": "DeleteMultipleClients",
    "group": "Clients",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n \"clients\":  [\n    {\"id\": 1},\n    {\"id\": 12},\n    {\"id\": 15}\n    {\"id\": 9}\n ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 ok\n    {\n    \"success\": {\n        \"1\": \"Successfully deleted\",\n        \"12\": \"Successfully deleted\",\n        \"15\": \"Successfully deleted\"\n    },\n    \"errors\" : {\n        \"9\": \"Not found\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/display/:id",
    "title": "Display client image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>Optional Size of the photo returned [original]</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "DisplayClientPhoto",
    "group": "Clients",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n   \"url\": \"/permFiles/images/Client/original/90.png\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"msg\": \"This client has no images\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/main",
    "title": "List Clients",
    "name": "ListClients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional pagination page</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "is_customer",
            "description": "<p>Optional query param to get customers only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Optional Flag to indicate act as a manger or normal staff [admin, staff].</p>"
          }
        ]
      }
    },
    "group": "Clients",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 ok\n\n{\n    \"clients\": [\n        {\n            \"Client\": {\n                \"id\": \"306912\",\n                \"name\": \"after new routes\",\n                \"email\": \"route@gmail.com\",\n                \"phone\": \"0237238\",\n                \"country_id\": \"2\",\n                \"address\": \"askmsakm\",\n                \"passport_no\": null,\n                \"passport_issue_date\": null,\n                \"passport_expiry_date\": null,\n                \"client_group_id\": null,\n                \"payment_terms\": null,\n                \"is_visible\": true,\n                \"tax_card_num\": null,\n                \"city_id\": null,\n                \"dob\": null,\n                \"crm_points\": \"0\",\n                \"is_corporate\": false,\n                \"mobile\": null,\n                \"created_by\": \"1\",\n                \"crm_organization_id\": \"3\"\n            },\n            \"Organization\": {\n                \"id\": \"3\",\n                \"name\": \"new routeئئئ\",\n                \"email\": \"hob@gmail.com\",\n                \"phone\": \"26612\",\n                \"mobile\": null,\n                \"address\": \"aoao\",\n                \"description\": null,\n                \"city_id\": null,\n                \"country_id\": null,\n                \"created_by\": \"1\",\n                \"is_visible\": true,\n                \"created\": \"2018-03-04 13:24:04\",\n                \"modified\": \"2018-03-04 14:13:02\"\n            }\n        }\n    ],\n    \"count\": 1,\n    \"current_page\": 1,\n    \"limit\": 50,\n    \"last_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/list",
    "title": "List Clients AutoComplete",
    "name": "ListClientsAutoComplete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional limit number default set to 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query",
            "description": "<p>Optional query string for autocomplete</p>"
          }
        ]
      }
    },
    "group": "Clients",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"clients\": [\n    {\n        \"id\": \"194\",\n        \"name\": \"Yara\",\n        \"email\": \"yara.yasser@yahoo.com\"\n    }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/search",
    "title": "Search Clients",
    "name": "SearchClients",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Optional Flag to indicate act as a manger or normal staff [admin, staff].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": "<p>Mandatory Search term is as a query param.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 ok\n\n{\n    \"clients\": [\n        {\n            \"Client\": {\n                \"id\": \"306912\",\n                \"name\": \"after new routes\",\n                \"email\": \"route@gmail.com\",\n                \"phone\": \"0237238\",\n                \"country_id\": \"2\",\n                \"address\": \"askmsakm\",\n                \"passport_no\": null,\n                \"passport_issue_date\": null,\n                \"passport_expiry_date\": null,\n                \"client_group_id\": null,\n                \"payment_terms\": null,\n                \"is_visible\": true,\n                \"tax_card_num\": null,\n                \"city_id\": null,\n                \"dob\": null,\n                \"crm_points\": \"0\",\n                \"is_corporate\": false,\n                \"mobile\": null,\n                \"created_by\": \"1\",\n                \"crm_organization_id\": \"3\"\n            },\n            \"Organization\": {\n                \"id\": \"3\",\n                \"name\": \"new routeئئئ\",\n                \"email\": \"hob@gmail.com\",\n                \"phone\": \"26612\",\n                \"mobile\": null,\n                \"address\": \"aoao\",\n                \"description\": null,\n                \"city_id\": null,\n                \"country_id\": null,\n                \"created_by\": \"1\",\n                \"is_visible\": true,\n                \"created\": \"2018-03-04 13:24:04\",\n                \"modified\": \"2018-03-04 14:13:02\"\n            }\n        }\n    ],\n    \"count\": 1,\n    \"current_page\": 1,\n    \"limit\": 50,\n    \"last_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "put",
    "url": "/clients/main/:id",
    "title": "Edit Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"Client\":\n    {\n       \"address\": \"6th of october\",\n       \"country_id\": 2,\n       \"email\": \"mob@deemalab.com\",\n       \"name\": \"yasminemOBx\",\n       \"phone\": \"0113214135\",\n       \"crm_organization_id\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "name": "UpdateClient",
    "group": "Clients",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n  {\n      \"msg\": \"Client successfully added.\",\n      \"ClientInfo\": {\n        \"Client\": {\n        \"id\": \"318893\",\n        \"name\": \"yasmineOBx\",\n        \"email\": \"amin@deemalab.com\",\n        \"phone\": \"0113214135\",\n        \"country_id\": \"2\",\n        \"address\": \"Masrgg El Gedida\",\n        \"passport_no\": null,\n        \"passport_issue_date\": null,\n        \"passport_expiry_date\": null,\n        \"client_group_id\": null,\n        \"payment_terms\": null,\n        \"is_visible\": true,\n        \"tax_card_num\": null,\n        \"city_id\": null,\n        \"dob\": null,\n        \"crm_points\": \"0\",\n        \"is_corporate\": false,\n        \"mobile\": null,\n        \"created_by\": \"1\",\n        \"crm_organization_id\": \"1\"\n     },\n     \"createdBy\": {\n        \"id\": \"1\",\n        \"name\": \"Yasmine Alaa\",\n        \"dob\": \"1987-03-11\",\n        \"personal_phone\": \"0101508076\",\n        \"other_phone_numbers\": \"\",\n        \"work_phone_ext\": \"333 / 777\",\n        \"work_mail\": \"\",\n        \"system_mail\": \"\",\n        \"personal_mail\": \"yasmine@deemalab.com\",\n        \"address\": \"A1, New Awkaf Buildings, Hadayek El Koba, Cairo, Egypt\",\n        \"employment_date\": \"2003-02-01\",\n        \"last_login\": \"2012-01-05 13:17:21\",\n        \"created\": \"2009-07-10 19:13:53\",\n        \"modified\": \"2018-01-30 11:26:52\",\n        \"username\": \"yasmine\",\n        \"password\": \"0e2eb0a1b60e506603b94d486c263787f9c48eb1\",\n        \"branch_id\": \"1\",\n        \"active\": true,\n        \"is_visible\": true,\n        \"online\": true,\n        \"signature\": \"\",\n        \"assigned_requests\": \"0\",\n        \"manager_id\": \"3\",\n        \"time_sheet_id\": \"11\",\n        \"sheet_id\": null,\n        \"token_active\": \"2018-01-30 12:26:52\",\n        \"ws_token\": \">[gahB;gx&VE6g.sGVKWpEHWAwCJ$4O1\",\n        \"last_password_changed\": \"2016-08-16 10:25:17\",\n        \"company_id\": \"1\",\n        \"force_password_change\": false,\n        \"push_bullet_token\": \"OmgiDhNIzyWOY8soD3hlRK3hE0SjmNjt\",\n        \"is_accessible\": true,\n        \"allow_ips\": null\n      },\n      \"Country\": {\n        \"name\": \"Afghanistan\"\n      },\n      \"ClientGroup\": {\n        \"group_name\": null\n      },\n      \"CrmOrganization\": {\n        \"id\": \"1\",\n        \"name\": \"dlc travel tech test\",\n        \"email\": \"dlc@ddtt.com\",\n        \"phone\": \"87652097\",\n        \"mobile\": \"74635329\",\n        \"address\": \"maadi st\",\n        \"description\": \"travel tech company\",\n        \"city_id\": \"162\",\n        \"country_id\": \"224\",\n        \"created_by\": \"1\",\n        \"is_visible\": false,\n        \"created\": null,\n        \"modified\": \"2018-01-20 15:20:34\",\n        \"Country\": {\n           \"id\": \"224\",\n           \"name\": \"United Arab Emirates\",\n           \"iso_alpha2\": \"AE\",\n           \"iso_alpha3\": \"ARE\",\n           \"iso_numeric\": \"784\",\n           \"currency_code\": \"AED\",\n           \"currency_name\": \"Dirham\",\n           \"currrency_symbol\": \"\",\n           \"flag\": \"AE.png\",\n           \"nationality\": \"Emirati\"\n         },\n        \"City\": {\n           \"id\": \"162\",\n           \"parent_id\": \"0\",\n           \"name\": \"Dubai\",\n           \"branch_id\": \"0\",\n           \"country_id\": \"224\",\n           \"is_visible\": true,\n           \"lat\": null,\n           \"lng\": null\n         }\n     },\n     \"Request\": [],\n         \"ClientContact\": [],\n         \"ClientAddress\": []\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": \"Client unsuccessfully updated\",\n  \"errors\": {\n     \"name\": [\n         \"You already have this name added\"\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients/upload/:id",
    "title": "UploadPhoto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "UploadClientPhoto",
    "group": "Clients",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n   \"msg\": \"image uploaded Successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/clients/main/:id",
    "title": "View Client",
    "name": "View_Client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 ok\n\n  {\n   \"ClientInfo\": {\n     \"Client\": [\n        {\n           \"id\": \"318890\",\n           \"name\": \"Amiytt\",\n           \"email\": \"amin@deemalab.com\",\n           \"phone\": \"0113214135\",\n           \"country_id\": null,\n           \"address\": \"Masrgg El Gedida\",\n           \"passport_no\": null,\n           \"passport_issue_date\": null,\n           \"passport_expiry_date\": null,\n           \"client_group_id\": null,\n           \"payment_terms\": null,\n           \"is_visible\": true,\n           \"tax_card_num\": null,\n           \"city_id\": null,\n           \"dob\": null,\n           \"crm_points\": \"0\",\n           \"is_corporate\": false,\n           \"mobile\": null,\n           \"created_by\": \"1\",\n           \"crm_organization_id\": null,\n           \"organization\": null\n       },\n       \"SimilarClients\": [\n         {\n           \"id\": \"318890\",\n           \"name\": \"Amiytt\",\n           \"email\": \"amin@deemalab.com\",\n           \"phone\": \"0113214135\",\n           \"country_id\": null,\n           \"address\": \"Masrgg El Gedida\",\n           \"passport_no\": null,\n           \"passport_issue_date\": null,\n           \"passport_expiry_date\": null,\n           \"client_group_id\": null,\n           \"payment_terms\": null,\n           \"is_visible\": true,\n           \"tax_card_num\": null,\n           \"city_id\": null,\n           \"dob\": null,\n           \"crm_points\": \"0\",\n           \"is_corporate\": false,\n           \"mobile\": null,\n           \"created_by\": \"1\",\n           \"crm_organization_id\": null,\n           \"organization\": null\n        }\n      ],\n       \"Organization\": {\n           \"id\": \"1\",\n           \"name\": \"dlc travel tech test\",\n           \"email\": \"dlc@ddtt.com\",\n           \"phone\": \"87652097\",\n           \"mobile\": \"74635329\",\n           \"address\": \"maadi st\",\n           \"description\": \"travel tech company\",\n           \"city_id\": \"162\",\n           \"country_id\": \"224\",\n           \"created_by\": \"1\",\n           \"is_visible\": false,\n           \"created\": null,\n           \"modified\": \"2018-01-20 15:20:34\",\n           \"Country\": {\n               \"id\": \"224\",\n               \"name\": \"United Arab Emirates\",\n               \"iso_alpha2\": \"AE\",\n               \"iso_alpha3\": \"ARE\",\n               \"iso_numeric\": \"784\",\n               \"currency_code\": \"AED\",\n               \"currency_name\": \"Dirham\",\n               \"currrency_symbol\": \"\",\n               \"flag\": \"AE.png\",\n               \"nationality\": \"Emirati\"\n           },\n           \"City\": {\n               \"id\": \"162\",\n               \"parent_id\": \"0\",\n               \"name\": \"Dubai\",\n               \"branch_id\": \"0\",\n               \"country_id\": \"224\",\n               \"is_visible\": true,\n               \"lat\": null,\n               \"lng\": null\n           }\n        },\n     \"Country\": {\n        \"id\": \"2\",\n        \"name\": \"Afghanistan\"\n    },\n    \"CreatedBy\": {\n        \"id\": \"1\",\n        \"name\": \"yasee\",\n        \"dob\": null,\n        \"personal_phone\": \"\",\n        \"other_phone_numbers\": \"\",\n        \"work_phone_ext\": \"\",\n        \"work_mail\": \"\",\n        \"system_mail\": \"\",\n        \"personal_mail\": \"\",,\n        \"time_sheet_id\": \"11\",\n        \"sheet_id\": null,\n        \"token_active\": \"2018-01-30 12:26:52\",\n        \"ws_token\": \">[gahB;gx&VE6g.sGVKWpEHWAwCJ$4O1\",\n        \"last_password_changed\": \"2018-04-01 11:59:42\",\n        \"company_id\": \"1\",\n        \"force_password_change\": false,\n        \"push_bullet_token\": \"OmgiDhNIzyWOY8soD3hlRK3hE0SjmNjt\",\n        \"is_accessible\": true,\n        \"allow_ips\": null\n    },\n    \"City\": {\n        \"id\": null,\n        \"name\": null\n    },\n     \"RequestsInfo\": {\n          \"Requests\": [\n           {\n            \"id\": \"211\",\n            \"subject\": \"quote please for 1 week tour\",\n            \"confirmed\": false,\n            \"cancelled\": null,\n            \"arrival_date\": null,\n            \"departure_date\": null,\n            \"request_status_id\": \"8\",\n            \"currency_id\": \"1\",\n            \"client_id\": \"318873\",\n            \"Currency\": {\n                \"id\": \"1\",\n                \"currency\": \"Euro\",\n                \"abbrev\": \"EUR\",\n                \"symbol\": \"&#8364;\",\n                \"symbol_direction\": true,\n                \"is_visible\": true\n           }\n          }\n       ],\n       \"NetValues\": [\n          {\n           \"abbrev\": \"EUR\",\n           \"netValue\": \"1060.00\"\n          }\n       ],\n      \"NumOfWon\": 1,\n      \"NumOfLost\": 4,\n      \"NumOfActive\": 0,\n      \"NumOfCancelled\": 0,\n      \"total\": 5\n     }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "closure-reasons/lead-reason-submission/:lead_id",
    "title": "Create Lead Closure Reason",
    "version": "0.1.0",
    "name": "CreateLeadClosureReason",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lead_id",
            "description": "<p>Mandatory Lead_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n  \"Request\":{\n      \"closure_note\":\"yasmie0\",\n      \"closure_reason_id\" : 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "group": "ClosureReasons",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n  {\n  \"Request\": {\n    \"id\": \"90\",\n    \"closure_note\": \"yasmie0\",\n    \"closure_reason_id\": \"1\"\n  },\n \"msg\": \"Succesfully save the requested reason!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "post",
    "url": "closure-reasons/main",
    "title": "Create New Closure Reason",
    "version": "0.1.0",
    "name": "CreateNewClosureReason",
    "group": "ClosureReasons",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ClosureReason\":{\n      \"title\":\"yasmine0\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n  \"ClosureReason\": {\n      \"id\": \"19\",\n      \"title\": \"yasmie0\",\n      \"is_visible\": true\n  },\n  \"msg\": \"Successfully created the requested closure reason!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n  \"msg\": \"Failed to create the requested closure reason!\",\n  \"errors\": [\n    {\n      \"title\": [\n         \"This Title Already Exists!\"\n      ]\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "delete",
    "url": "closure-reasons/main/:id",
    "title": "Delete Closure Reasons",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Id</p>"
          }
        ]
      }
    },
    "name": "DeleteClosureReasons",
    "group": "ClosureReasons",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n{\n  \"msg\": \"Successfully deleted the requested closure reason!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "get",
    "url": "closure-reasons/main",
    "title": "List All Closure Reasons",
    "version": "0.1.0",
    "name": "ListAllClosureReasons",
    "group": "ClosureReasons",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n  {\n   \"msg\": \"Fetched Reasons!\",\n   \"count\": 12,\n   \"last_page\": 1,\n   \"current_page\": 1,\n   \"closure_reasons\": [\n     {\n       \"id\": \"1\",\n       \"title\": \"yasmine0\",\n       \"is_visible\": true\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "get",
    "url": "closure-reasons/list",
    "title": "List Closure Reasons",
    "version": "0.1.0",
    "name": "ListClosureReasons",
    "group": "ClosureReasons",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Ok\n {\n \"ClosureReasons\": {\n   \"1\": \"yasmine0\",\n   \"3\": \"Competition and Prices\",\n },\n \"msg\": \"Fetched Closure Reasons!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "put",
    "url": "closure-reasons/main/:id",
    "title": "Update Closure Reason",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ClosureReason\":{\n      \"title\":\"yasmine\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "name": "UpdateClosureReason",
    "group": "ClosureReasons",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n{\n  \"ClosureReason\": {\n      \"id\": \"19\",\n      \"title\": \"yasmie0\",\n      \"is_visible\": true\n  },\n  \"msg\": \"Successfully updated the requested closure reason!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n {\n  \"msg\": \"Failed to update the requested closure reason!\",\n  \"errors\": [\n    {\n      \"title\": [\n         \"This Title Already Exists!\"\n      ]\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "get",
    "url": "closure-reasons/main/:id",
    "title": "View Closure Reason",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Id</p>"
          }
        ]
      }
    },
    "name": "ViewClosureReason",
    "group": "ClosureReasons",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n{\n  \"ClosureReason\": {\n      \"id\": \"19\",\n      \"title\": \"yasmie0\",\n      \"is_visible\": true\n  },\n  \"msg\": \"Fetched Closure Reason!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "get",
    "url": "closure-reasons/lead-reason-list/:lead_id",
    "title": "get Lead Closure Reason",
    "version": "0.1.0",
    "name": "getLeadClosureReason",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lead_id",
            "description": "<p>Mandatory Lead_id</p>"
          }
        ]
      }
    },
    "group": "ClosureReasons",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Ok\n{\n  \"Request\": {\n      \"id\": \"90\",\n      \"closure_note\": \"yasmie0\",\n      \"closure_reason_id\": \"1\"\n  },\n  \"ClosureReason\": {\n      \"title\": \"yasmine0\",\n      \"id\": \"1\"\n  },\n  \"msg\": \"Fetched Lead!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "ClosureReasons"
  },
  {
    "type": "put",
    "url": "/settings/companies/:id",
    "title": "Edit Company Data",
    "name": "EditCompany",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Company Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Company\": {\n       \"id\": \"1\",\n       \"name\": \"Memphis Tours Egyptt\",\n       \"local_name\": \"شركة ممفيس للسياحة\",\n       \"slogan\": \"Establish 1955\",\n       \"local_slogan\": \"تأسست سنة 1955\",\n       \"telephone\": \"+20235716050\",\n       \"fax\": \"+20237744554\",\n       \"email\": \"reservations@memphistours.com\",\n       \"address\": \"24 Mourad Street, Giza Sq., Egypt\",\n       \"website\": \"www.memphistours.com\",\n       \"accounting_mail\": \"accounts@memphistours.com\",\n       \"phone\": null,\n       \"mobile\": \"\",\n       \"general_mngr_name\": \"Neyazy Barakat\",\n       \"financial_mngr_name\": \"Mahmoud Ewida\",\n       \"added_by\": \"1\",\n       \"created\": \"2014-12-11 00:00:00\",\n       \"modified\": \"2016-10-11 21:33:13\",\n       \"is_visible\": true,\n       \"default_email\": null,\n       \"email_credentials\": null\n   }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"msg\": \"Company Successfully Updated\",\n   \"company_details\": {\n       \"Company\": {\n           \"id\": \"1\",\n           \"name\": \"Memphis Tours Egyptt\",\n           \"local_name\": \"شركة ممفيس للسياحة\",\n           \"slogan\": \"Establish 1955\",\n           \"local_slogan\": \"تأسست سنة 1955\",\n           \"telephone\": \"+20235716050\",\n           \"fax\": \"+20237744554\",\n           \"email\": \"reservations@memphistours.com\",\n           \"address\": \"24 Mourad Street, Giza Sq., Egypt\",\n           \"website\": \"www.memphistours.com\",\n           \"accounting_mail\": \"accounts@memphistours.com\",\n           \"phone\": null,\n           \"mobile\": \"\",\n           \"general_mngr_name\": \"Neyazy Barakat\",\n           \"financial_mngr_name\": \"Mahmoud Ewida\",\n           \"added_by\": \"1\",\n           \"created\": \"2014-12-11 00:00:00\",\n           \"modified\": \"2016-10-11 21:33:13\",\n           \"is_visible\": true,\n           \"default_email\": null,\n           \"email_credentials\": null\n       }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Companies"
  },
  {
    "type": "post",
    "url": "/settings/companies/upload/:id",
    "title": "Upload Company logo",
    "name": "UploadLogo",
    "group": "Companies",
    "version": "0.1.0",
    "description": "<p>You should ignore Content-Type header, add [type = api] header, use form-data and upload the file using <em>file</em> key in the form.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Image uploaded successfully.\",\n    \"file\": \"D:\\\\wamp64\\\\www\\\\deema\\\\app\\\\webroot\\\\permFiles/images/Company/large/1.jpg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Full path for uploaded file.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Companies"
  },
  {
    "type": "GET",
    "url": "/settings/companies/:id",
    "title": "View Company Data",
    "name": "ViewCompany",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Company unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n {\n  \"Company\": {\n      \"id\": \"1\",\n      \"name\": \"Memphis Tours Egypt\",\n      \"local_name\": \"شركة ممفيس للسياحة\",\n      \"slogan\": \"Establish 1955\",\n      \"local_slogan\": \"تأسست سنة 1955\",\n      \"telephone\": \"+20235716050\",\n      \"fax\": \"+20237744554\",\n      \"email\": \"reservations@memphistours.com\",\n      \"address\": \"24 Mourad Street, Giza Sq., Egypt\",\n      \"website\": \"www.memphistours.com\",\n      \"accounting_mail\": \"accounts@memphistours.com\",\n      \"phone\": null,\n      \"mobile\": \"\",\n      \"general_mngr_name\": \"Neyazy Barakat\",\n      \"financial_mngr_name\": \"Mahmoud Ewida\",\n      \"added_by\": \"1\",\n      \"created\": \"2014-12-11 00:00:00\",\n      \"modified\": \"2016-10-11 21:33:13\",\n      \"is_visible\": true,\n      \"default_email\": null,\n      \"email_credentials\": null,\n      \"image\" : null\n\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " {\n  \"msg\": \"Company not found.\",\n  \"errors\": {\n      \"msg\": \"Invalid Company ID provided.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "countries/list-all",
    "title": "Countries All",
    "name": "CountriesAll",
    "group": "Countries",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n{\n \"Countries\": {\n     \"1\": \"United States\",\n     \"2\": \"Afghanistan\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Countries"
  },
  {
    "type": "get",
    "url": "countries/all",
    "title": "List Countries",
    "name": "ListCountries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional limit number default set to 200</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>Optional Query Param for Search countries</p>"
          }
        ]
      }
    },
    "group": "Countries",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"countries\": [\n     {\n        \"id\": \"2\",\n       \"name\": \"Afghanistan\"\n     }\n   ],\n   \"limit\": 200,\n   \"msg\": \"fetched countries!\",\n   \"count\": 243,\n   \"current_page\": 1,\n   \"last_page\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Countries"
  },
  {
    "type": "post",
    "url": "/currencies/main/",
    "title": "Create Currency",
    "name": "CreateCurrency",
    "group": "Currencies",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"Currency\":{\n      \"currency\": \"cuencyc hhname\",\n      \"abbrev\": \"k\",\n      \"symbol\": \"AooDc\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 Created\n {\n  \"Currency\": {\n    \"id\": \"18\",\n    \"currency\": \"Euro\",\n    \"abbrev\": \"EUR\",\n    \"symbol\": \"&#8364;\",\n    \"symbol_direction\": true,\n    \"is_visible\": true\n },\n \"msg\": \"Succesfully created new Currency\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Currencies"
  },
  {
    "type": "delete",
    "url": "/currencies/main/:id",
    "title": "Delete Currency",
    "name": "DeleteCurrency",
    "group": "Currencies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"successfully deleted currency\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Currencies"
  },
  {
    "type": "get",
    "url": "/currencies/main",
    "title": "List Currencies",
    "name": "ListCurrencies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "group": "Currencies",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Ok\n{\n\"page\": \"1\",\n\"limit\": 100,\n\"msg\": \"Fetched all currencies\",\n\"currencies\": [\n    {\n       \"id\": \"1\",\n       \"currency\": \"cubbencyc hhname\",\n       \"abbrev\": \"kvv\",\n       \"symbol\": \"AoooDc\",\n       \"symbol_direction\": true,\n       \"is_visible\": true\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Currencies"
  },
  {
    "type": "get",
    "url": "/currencies/names",
    "title": "Currencies Names",
    "name": "ListCurrenciesNames",
    "group": "Currencies",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n {\n  \"Currencies\": {\n     \"1\": \"kvv\",\n     \"2\": \"USD\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Currencies"
  },
  {
    "type": "put",
    "url": "/currencies/main/:id",
    "title": "Update Currency",
    "name": "UpdateCurrency",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"Currency\":{\n      \"currency\": \"cuencyc hhname\",\n      \"abbrev\": \"k\",\n      \"symbol\": \"AooDc\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "group": "Currencies",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n {\n  \"Currency\": {\n    \"id\": \"1\",\n    \"currency\": \"Euro\",\n    \"abbrev\": \"EUR\",\n    \"symbol\": \"&#8364;\",\n    \"symbol_direction\": true,\n    \"is_visible\": true\n },\n \"msg\": \"Succesfully Updated Currency\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Currencies"
  },
  {
    "type": "get",
    "url": "/currencies/main/:id",
    "title": "View Currency",
    "name": "ViewCurrency",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      }
    },
    "group": "Currencies",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n {\n  \"Currency\": {\n    \"id\": \"1\",\n    \"currency\": \"Euro\",\n    \"abbrev\": \"EUR\",\n    \"symbol\": \"&#8364;\",\n    \"symbol_direction\": true,\n    \"is_visible\": true\n },\n \"msg\": \"Fetched currency\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Currencies"
  },
  {
    "type": "post",
    "url": "/custom-forms/",
    "title": "Create Custom Form",
    "name": "CreateCustomForm",
    "group": "Custom_Forms",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n     \"Form\": {\n         \"title\": \"Transfer + Meal + Tour\",\n         \"fields\": [\n             {\n                 \"name\": \"Restaurant Name\",\n                 \"type\": \"string\",\n                 \"required\": 1\n             }\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n\n{\n    \"msg\": \"Created new item type/form.\",\n    \"form\": {\n        \"OtherItemsForms\": {\n            \"id\": \"22\",\n            \"title\": \"Transfer + Meal + Tour\",\n            \"fields\": [\n                {\n                    \"name\": \"restaurant_name\",\n                    \"type\": \"string\",\n                    \"required\": 1\n                }\n            ],\n            \"created\": \"2018-02-20 02:19:14\",\n            \"modified\": \"2018-02-20 02:19:14\",\n            \"is_visible\": true\n        }\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Created custom item in database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"errors\": {\n         \"title\": [\n             \"This item title already exists !\"\n         ]\n     },\n     \"msg\": \"Bad params.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Custom_Forms"
  },
  {
    "type": "delete",
    "url": "/custom-forms/:form_id",
    "title": "Delete Custom Form",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "form_id",
            "description": "<p>Form unique id</p>"
          }
        ]
      }
    },
    "name": "DeleteCustomForm",
    "group": "Custom_Forms",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"msg\": \"Deleted form.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n    \"msg\": \"Item not found. Please, provide a valid item_id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Custom_Forms"
  },
  {
    "type": "put",
    "url": "/custom-forms/:form_id",
    "title": "Edit Custom Form",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "form_id",
            "description": "<p>Forms unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n     \"Form\": {\n         \"title\": \"Transfer + Meal + Tour\",\n         \"fields\": [\n             {\n                 \"name\": \"Restaurant Name\",\n                 \"type\": \"string\",\n                 \"required\": 1\n             }\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "name": "EditCustomForm",
    "group": "Custom_Forms",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"form\": {\n        \"id\": \"22\",\n        \"title\": \"Transfer + Meal + Tour\",\n        \"fields\": [\n            {\n                \"name\": \"restaurant_name\",\n                \"type\": \"string\",\n                \"required\": 1\n            }\n        ],\n        \"created\": \"2018-02-20 02:19:14\",\n        \"modified\": \"2018-02-20 02:22:29\",\n        \"is_visible\": true\n    },\n    \"msg\": \"Successfully updated form.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Form not found. Please, provide a valid id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Custom_Forms"
  },
  {
    "type": "get",
    "url": "/custom-froms/",
    "title": "List Custom Forms",
    "name": "ListCustomForms",
    "group": "Custom_Forms",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n     \"forms\": [\n         {\n             \"OtherItemsForms\": {\n                 \"title\": \"Hotel + Sightseeing\",\n                 \"id\": \"11\"\n             }\n         },\n         {\n             \"OtherItemsForms\": {\n                 \"title\": \"New form\",\n                 \"id\": \"16\"\n             }\n         }\n     ]\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "items",
            "description": "<p>Retrieved custom forms.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Custom_Forms"
  },
  {
    "type": "get",
    "url": "/custom-forms/:form_id/",
    "title": "View Custom Form",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "form_id",
            "description": "<p>Forms unique id</p>"
          }
        ]
      }
    },
    "name": "ViewCustomForm",
    "group": "Custom_Forms",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"form\": {\n        \"id\": \"11\",\n        \"title\": \"Hotel + Sightseeing\",\n        \"fields\": [\n            {\n                \"name\": \"hotel_name\",\n                \"type\": \"string\",\n                \"required\": 0\n            },\n            {\n                \"name\": \"hotel_type\",\n                \"type\": \"string\",\n                \"required\": 0\n            }\n        ],\n        \"created\": \"2017-11-07 13:20:47\",\n        \"modified\": \"2017-11-19 14:45:51\",\n        \"is_visible\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "form",
            "description": "<p>Retrieved form from database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Form not found. Please, provide a valid id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Custom_Forms"
  },
  {
    "type": "POST",
    "url": "/settings/departments",
    "title": "Add a new Department",
    "name": "AddDepartment",
    "group": "Departments",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n   \"Department\": {\n       \"name\": \"marketing\",\n       \"overview\": \"\",\n       \"notes\": null,\n       \"is_sales_department\": true,\n       \"is_transportation\": false,\n       \"is_visible\": true,\n       \"is_reservation\": false,\n       \"is_guest_relation\": false,\n       \"is_ticketing\": false,\n       \"toll_free_numbers\": \"800-872-990\",\n       \"default_lang\": \"4\",\n       \"voice_numbers\": \"+3901119620196\",\n       \"manager_staff_id\": null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n     \"Department\": {\n         \"id\": \"57\",\n         \"name\": \"marketing \",\n         \"overview\": \"\",\n         \"notes\": null,\n         \"is_sales_department\": true,\n         \"is_transportation\": false,\n         \"is_visible\": true,\n         \"is_reservation\": false,\n         \"is_guest_relation\": false,\n         \"is_ticketing\": false,\n         \"toll_free_numbers\": \"800-872-990\",\n         \"default_lang\": \"4\",\n         \"voice_numbers\": \"+3901119620196\",\n         \"manager_staff_id\": null\n     },\n     \"msg\": \"Successfully Added New Department\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " {\n   \"msg\": \"Failed to create the requested Department !\",\n   \"errors\": {\n       \"name\": [\n           \"This Department already Exists !\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Departments"
  },
  {
    "type": "post",
    "url": "/departments/assignments/:department_id/:staff_id",
    "title": "Assign Department To Staff",
    "name": "AssignDepartmentToStaff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "department_id",
            "description": "<p>Mandatory department_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Mandatory staff_id</p>"
          }
        ]
      }
    },
    "group": "Departments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"DepartmentsStaff\": {\n    \"id\": \"2599\",\n    \"department_id\": \"8\",\n    \"staff_id\": \"1\"\n  },\n  \"msg\": \"The department successfully assigned\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"msg\": \"Failed to assign the requested department!\",\n \"errors\": {\n     \"msg\": \"This department already assigned to the requested user!\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Departments"
  },
  {
    "type": "delete",
    "url": "departments/de-assignments/:department_id/:staff_id",
    "title": "De-assign Department Staff",
    "name": "De_assignDepartmentsStaff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "department_id",
            "description": "<p>Mandatory department_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Mandatory staff_id</p>"
          }
        ]
      }
    },
    "group": "Departments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"msg\": \"The requested department successfully de-assigned\"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n {\n \"msg\": \"record not found.\",\n \"errors\": [\n   {\n      \"msg\": \"Invalid Record ID provided.\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Departments"
  },
  {
    "type": "post",
    "url": "/settings/departments/delete-bulk",
    "title": "Delete Bulk Departments",
    "name": "DeleteBulkDepartments",
    "group": "Departments",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"departments\": [\n     1,\n     3,\n     4\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n \"msg\": \"All departments successfully deleted.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n{\n  \"msg\": \"Some departments were not deleted, check errors array.\",\n  \"errors\": [\n      {\n          \"department_id\": 555,\n          \"msg\": \"This department doesn't exist.\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Departments"
  },
  {
    "type": "DELETE",
    "url": "/settings/departments/:id",
    "title": "Delete an Existing Department",
    "name": "DeleteDepartment",
    "group": "Departments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Ok\n{\n   \"msg\": \"Successfully Deleted this  Department\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"This department Does not exist\",\n    \"errors\": {\n        \"msg\": \"Invalid Department ID provided.\"\n      }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Departments"
  },
  {
    "type": "PUT",
    "url": "/settings/departments/:id",
    "title": "Edit an Existing Department",
    "name": "EditDepartment",
    "group": "Departments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Department\": {\n        \"name\": \"marketing\",\n        \"overview\": \"\",\n        \"notes\": null,\n        \"is_sales_department\": true,\n        \"is_transportation\": false,\n        \"is_visible\": true,\n        \"is_reservation\": false,\n        \"is_guest_relation\": false,\n        \"is_ticketing\": false,\n        \"toll_free_numbers\": \"800-872-990\",\n        \"default_lang\": \"4\",\n        \"voice_numbers\": \"+3901119620196\",\n        \"manager_staff_id\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Ok\n{\n  \"Department\": {\n      \"id\": \"8\",\n      \"name\": \"marketing\",\n      \"overview\": \"\",\n      \"notes\": null,\n      \"is_sales_department\": true,\n      \"is_transportation\": false,\n      \"is_visible\": true,\n      \"is_reservation\": false,\n      \"is_guest_relation\": false,\n      \"is_ticketing\": false,\n      \"toll_free_numbers\": \"800-872-990\",\n      \"default_lang\": \"4\",\n      \"voice_numbers\": \"+3901119620196\",\n      \"manager_staff_id\": null\n  },\n  \"msg\": \"Successfully Edited the  Department\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n     \"msg\": \"This department Does not exist\",\n     \"errors\": {\n         \"msg\": \"Invalid Department ID provided.\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Departments"
  },
  {
    "type": "GET",
    "url": "/settings/departments",
    "title": "List All Departments",
    "name": "ListDepartments",
    "group": "Departments",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n  \"msg\": \"Fetched Departments\",\n  \"count\": 34,\n  \"departments\": [\n   {\n       \"Department\": {\n           \"id\": \"1\",\n           \"name\": \"Administration\",\n           \"overview\": null,\n           \"notes\": null,\n           \"is_sales_department\": false,\n           \"is_transportation\": null,\n           \"is_visible\": true,\n           \"is_reservation\": null,\n           \"is_guest_relation\": null,\n           \"is_ticketing\": false,\n           \"toll_free_numbers\": null,\n           \"default_lang\": \"0\",\n           \"voice_numbers\": null,\n           \"manager_staff_id\": null\n       }\n   },\n   {\n       \"Department\": {\n           \"id\": \"2\",\n           \"name\": \"Information Technology\",\n           \"overview\": \"\",\n           \"notes\": null,\n           \"is_sales_department\": false,\n           \"is_transportation\": false,\n           \"is_visible\": true,\n           \"is_reservation\": false,\n           \"is_guest_relation\": false,\n           \"is_ticketing\": false,\n           \"toll_free_numbers\": \"+12015598743\",\n           \"default_lang\": \"1\",\n           \"voice_numbers\": null,\n           \"manager_staff_id\": null\n       }\n     }\n   ],\n   \"count\": 2,\n   \"limit\": 50,\n   \"last_page\": 1,\n   \"current_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Departments"
  },
  {
    "type": "GET",
    "url": "/settings/departments/:id",
    "title": "View an Existing Department",
    "name": "ViewDepartment",
    "group": "Departments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n\n  {\n  \"Department\": {\n      \"id\": \"49\",\n      \"name\": \"Medical\",\n      \"overview\": \"\",\n      \"notes\": null,\n      \"is_sales_department\": true,\n      \"is_transportation\": false,\n      \"is_visible\": true,\n      \"is_reservation\": false,\n      \"is_guest_relation\": false,\n      \"is_ticketing\": false,\n      \"toll_free_numbers\": \"\",\n      \"default_lang\": \"1\",\n      \"voice_numbers\": \"\",\n      \"manager_staff_id\": null\n  },\n  \"users\": [\n      {\n         \"id\": \"10\",\n         \"name\": \"Raghda Mohamed\",\n         \"work_mail\": \"raghda@memphistours.com\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Departments"
  },
  {
    "type": "POST",
    "url": "/inventory/items/routes",
    "title": "Add a new route",
    "name": "AddRoute",
    "group": "Inventory",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n   \"TransferRoute\":\n        {\n           \"title\":\"gha\",\n           \"from_txt\":\"\",\n           \"to_txt\":\"\",\n           \"city_from_id\":\"187\",\n           \"city_to_id\":\"243\",\n          \"notes\":\"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n   \"TransferRoute\": {\n       \"id\": \"854\",\n       \"title\": \"gha\",\n       \"from_txt\": \"\",\n       \"to_txt\": \"\",\n       \"city_from_id\": \"187\",\n       \"city_to_id\": \"243\",\n       \"notes\": \"\",\n       \"is_visible\": true\n   },\n   \"CityFrom\": {\n       \"name\": \" BIRMINGHAM\"\n   },\n   \"CityTo\": {\n       \"name\": \" KAOHSIUNG \"\n   },\n   \"msg\": \"Transfer Route successfully added\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/inventory/items/cruises",
    "title": "Create Cruise",
    "name": "CreateCruise",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n     \"Cruise\":{\n         \"name\":\"yygy\",\n          \"star_rating_id\":\"3\",\n          \"contact_person\":\"\",\n          \"mobile\":\"\",\n          \"email\":\"fff@w.net\",\n          \"tax_card_num\":\"\",\n          \"children_policy\":\"\",\n          \"notes\":\"\",\n          \"cruise_type_id\":\"1\",\n          \"city_id\":\"233\",\n          \"phone\":\"8888\",\n          \"fax\":\"\",\n          \"website\":\"\",\n         }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"Cruise\": {\n      \"id\": \"208\",\n      \"cruise_type_id\": \"1\",\n      \"star_rating_id\": \"3\",\n      \"city_id\": \"233\",\n      \"name\": \"yygy\",\n      \"contact_person\": \"\",\n      \"phone\": \"8888\",\n      \"fax\": \"\",\n      \"mobile\": \"\",\n      \"email\": \"fff@w.net\",\n      \"website\": \"\",\n      \"children_policy\": \"\",\n      \"supplements\": \"\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 10:06:02\",\n      \"inc_sightseeing\": false,\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  },\n  \"CruiseType\": {\n      \"id\": \"1\",\n      \"parent_id\": \"0\",\n      \"name\": \"Nile Cruise\",\n      \"description\": \"Nile Cruise in Egypt is the best thing You can do when you come\",\n      \"is_visible\": true\n  },\n  \"msg\": \"Cruise successfully added\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/inventory/items/hotels",
    "title": "Create Hotel",
    "name": "CreateHotel",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n     \"Hotel\":{\n         \"name\":\"yygy\",\n          \"star_rating_id\":\"3\",\n          \"mobile\":\"\",\n          \"email\":\"fff@w.net\",\n          \"tax_card_num\":\"\",\n          \"notes\":\"\",\n          \"city_id\":\"233\",\n          \"phone\":\"8888\",\n          \"fax\":\"\",\n          \"website\":\"\",\n         }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n  {\n  \"Hotel\": {\n      \"id\": \"2158\",\n      \"city_id\": \"233\",\n      \"name\": \"tnyshooy\",\n      \"star_rating_id\": \"3\",\n      \"contact_person\": \"\",\n      \"phone\": \"\",\n      \"fax\": \"\",\n      \"mobile\": \"00000\",\n      \"email\": \"test@xx.com\",\n      \"website\": \"\",\n      \"address\": \"\",\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 12:36:44\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  }\n  \"msg\": \"Hotel successfully added\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/inventory/items/restaurants",
    "title": "Create Restaurant",
    "name": "CreateRestaurant",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   {\n   \"Restaurant\":{\n       \"name\":\"hchyt\",\n       \"address\":\"yyy\",\n       \"phone\":\"777\",\n       \"fax\":\"\",\n       \"city_id\":\"187\",\n       \"email\":\"\",\n       \"website\":\"\",\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n   {\n    \"Restaurant\": {\n        \"id\": \"67\",\n        \"name\": \"hchyht\",\n        \"address\": \"yyy\",\n        \"phone\": \"777\",\n        \"fax\": \"\",\n        \"email\": \"\",\n        \"restaurant_category_id\": \"1\",\n        \"city_id\": \"187\",\n        \"website\": \"\",\n        \"tax_card_num\": null,\n        \"payment_terms\": \"1\",\n        \"is_visible\": true,\n        \"contact_person\": null,\n        \"payment_information\": \"\"\n    },\n    \"City\": {\n        \"id\": \"187\",\n        \"name\": \" BIRMINGHAM\"\n    },\n    \"msg\": \"Succesfully created new restaurant\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/inventory/items/sightseeings",
    "title": "Create Sightseeing",
    "name": "CreateSightseeing",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n  \"Thingstodo\":{\n      \"name\":\"Create  sightseeing\",\n      \"city_id\":1,\n      \"to_city_id\":43,\n      \"duration\":\"3\",\n      \"starts_at\":\"8:30\",\n      \"price\":\"250\",\n      \"currency_id\":\"3\",\n      \"thingstodo_type\":1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"Thingstodo\": {\n      \"id\": \"1187\",\n      \"city_id\": \"1\",\n      \"to_city_id\": \"43\",\n      \"name\": \"Pyramid\",\n      \"accounting_tickets_menu\": null,\n      \"acc_expense_id\": null,\n      \"duration\": \"3\",\n      \"price\": \"250.00\",\n      \"currency_id\": \"3\",\n      \"is_visible\": true,\n      \"thingstodo_type\": \"1\",\n      \"starts_at\": \"8:30\"\n  },\n  \"ToCity\": {\n      \"id\": \"43\",\n      \"name\": \"Jordon - Petra (Country)\"\n  },\n  \"City\": {\n      \"id\": \"1\",\n      \"name\": \"Cairo\"\n  },\n  \"msg\": \"Pyramid created Successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "inventory/items/supplements",
    "title": "Create Supplement",
    "name": "CreateSupplement",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"AccommodationSupplement\":{\n     \"title\":\"hello\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n   \"AccommodationSupplement\": {\n      \"id\": \"11\",\n      \"title\": \"hello\",\n      \"is_visible\": true\n    },\n    \"msg\": \"Supplement successfully added\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "delete",
    "url": "/inventory/items/hotels/:id",
    "title": "Delete Hotel",
    "name": "DeleteHotel",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Hotel successfully deleted\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "delete",
    "url": "/inventory/items/restaurants/:id",
    "title": "Delete Restaurant",
    "name": "DeleteRestaurant",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Successfully deleted restaurant\"\n\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "DELETE",
    "url": "/inventory/items/routes/:id",
    "title": "Delete Route Data",
    "name": "DeleteRoute",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Route Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"msg\": \"The Transfer Route successfuly deleted\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 200 Ok\n{\n \"msg\": \"Route not found.\",\n \"errors\": {\n    \"msg\": \"Invalid Route ID provided.\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "delete",
    "url": "/inventory/items/sightseeings/:id",
    "title": "Delete Sightseeing",
    "name": "DeleteSightseeing",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Successfully deleted Sightseeing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "delete",
    "url": "/inventory/items/supplements/:id",
    "title": "Delete Supplement",
    "name": "DeleteSupplement",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Supplement successfully deleted\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "/inventory/items/routes/:id",
    "title": "Edit Route Data",
    "name": "EditRoute",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Route Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"TransferRoute\":\n    {\n      \"title\":\"gha\",\n      \"from_txt\":\"\",\n      \"to_txt\":\"\",\n      \"city_from_id\":\"18\",\n      \"city_to_id\":\"243\",\n     \"notes\":\"\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n  \"TransferRoute\": {\n      \"id\": \"854\",\n      \"title\": \"gha\",\n      \"from_txt\": \"\",\n      \"to_txt\": \"\",\n      \"city_from_id\": \"18\",\n      \"city_to_id\": \"243\",\n      \"notes\": \"\",\n      \"is_visible\": true\n  },\n  \"CityFrom\": {\n      \"name\": \"Kharga\"\n  },\n  \"CityTo\": {\n      \"name\": \" KAOHSIUNG \"\n  },\n  \"msg\": \"Transfer Route successfully updated\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"msg\": \"Route not found.\",\n   \"errors\": {\n        \"msg\": \"Invalid Route ID provided.\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/cruises",
    "title": "List Cruises",
    "name": "ListCruises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Pagination page number</p>"
          }
        ]
      }
    },
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"msg\": \"fetched cruises\",\n  \"limit\": 100,\n  \"count\": 146,\n  \"current_page\": 1,\n  \"last_page\": 2,\n  \"cruises\": [\n      {\n      \"id\": \"208\",\n      \"cruise_type_id\": \"1\",\n      \"star_rating_id\": \"3\",\n      \"city_id\": \"233\",\n      \"name\": \"yygy\",\n      \"contact_person\": \"\",\n      \"phone\": \"8888\",\n      \"fax\": \"\",\n      \"mobile\": \"\",\n      \"email\": \"fff@w.net\",\n      \"website\": \"\",\n      \"children_policy\": \"\",\n      \"supplements\": \"\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 10:06:02\",\n      \"inc_sightseeing\": false,\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n     },\n    \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n    },\n    \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n    },\n    \"CruiseType\": {\n      \"id\": \"1\",\n      \"parent_id\": \"0\",\n      \"name\": \"Nile Cruise\",\n      \"description\": \"Nile Cruise in Egypt is the best thing You can do when you come\",\n      \"is_visible\": true\n    },\n      \"CreatedBy\": {\n        \"id\": \"25\",\n        \"name\": \"Hamdy Emery\"\n      },\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/cruises-names",
    "title": "List Cruises Names",
    "name": "ListCruisesNames",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"CruisesList\": {\n      \"9\": \"M/S Crown Jewel\",\n      \"11\": \"M/S Royale\",\n      \"13\": \"M/S Regina\",\n      \"14\": \"M/S Crown Prince\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/hotels",
    "title": "List Hotels",
    "name": "ListHotels",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"msg\": \"Fetched Hotels\",\n  \"limit\": 100,\n  \"count\": 975,\n  \"current_page\": 1,\n  \"last_page\": 10,\n  \"hotels\": [\n  {\n  \"Hotel\": {\n      \"id\": \"2158\",\n      \"city_id\": \"233\",\n      \"name\": \"tnyshooy\",\n      \"star_rating_id\": \"3\",\n      \"contact_person\": \"\",\n      \"phone\": \"\",\n      \"fax\": \"\",\n      \"mobile\": \"00000\",\n      \"email\": \"test@xx.com\",\n      \"website\": \"\",\n      \"address\": \"\",\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 12:36:44\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/hotels-names",
    "title": "List Hotels Names",
    "name": "ListHotelsNames",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"HotelsList\": {\n      \"1\": \"Nile  Hotel Cairo\",\n      \"2\": \"Nefertari Hotel\",\n      \"8\": \"Pyramisa Isis Island Hotel\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/restaurants",
    "title": "List Restaurants",
    "name": "ListRestaurants",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 ok\n\n{\n  \"msg\": \"Fetched all restaurants\",\n  \"limit\": 100,\n  \"count\": 49,\n  \"current_page\": 1,\n  \"last_page\": 1,\n  \"restaurants\": [\n    {\n    \"Restaurant\": {\n        \"id\": \"67\",\n        \"name\": \"hchyht\",\n        \"address\": \"yyy\",\n        \"phone\": \"777\",\n        \"fax\": \"\",\n        \"email\": \"\",\n        \"restaurant_category_id\": \"1\",\n        \"city_id\": \"187\",\n        \"website\": \"\",\n        \"tax_card_num\": null,\n        \"payment_terms\": \"1\",\n        \"is_visible\": true,\n        \"contact_person\": null,\n        \"payment_information\": \"\"\n    },\n    \"City\": {\n        \"id\": \"187\",\n        \"name\": \" BIRMINGHAM\"\n    }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/restaurants-names",
    "title": "List Restaurants Name",
    "name": "ListRestaurantsName",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 ok\n\n{\n  \"RestaurantsList\": {\n    \"2\": \"Nile Crytsal Floating Restaurant \",\n    \"3\": \"Cleopatra Restaurant \",\n    \"4\": \"Tag al Sultan Restaurant\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "GET",
    "url": "/inventory/items/routes",
    "title": "List All Routes",
    "name": "ListRoutes",
    "group": "Inventory",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"limit\": 100,\n \"count\": 695,\n \"last_page\": 14,\n \"current_page\": 1,\n \"routes\": [\n {\n     \"TransferRoute\": {\n         \"id\": \"3\",\n         \"title\": \"Cairo Airport / Down Town \",\n         \"from_txt\": null,\n         \"to_txt\": null,\n         \"city_from_id\": \"1\",\n         \"city_to_id\": \"1\",\n         \"notes\": null,\n         \"is_visible\": true\n     },\n     \"CityFrom\": {\n         \"id\": \"1\",\n         \"parent_id\": \"0\",\n         \"name\": \"Cairo\",\n         \"branch_id\": \"1\",\n         \"country_id\": \"64\",\n         \"is_visible\": true,\n         \"lat\": \"30.0444196\",\n         \"lng\": \"31.23571160000006\"\n     },\n     \"CityTo\": {\n         \"id\": \"1\",\n         \"parent_id\": \"0\",\n         \"name\": \"Cairo\",\n         \"branch_id\": \"1\",\n         \"country_id\": \"64\",\n         \"is_visible\": true,\n         \"lat\": \"30.0444196\",\n         \"lng\": \"31.23571160000006\"\n     }\n },\n {\n     \"TransferRoute\": {\n         \"id\": \"4\",\n         \"title\": \"Cairo airport / 6 october  city\",\n         \"from_txt\": null,\n         \"to_txt\": null,\n         \"city_from_id\": \"1\",\n         \"city_to_id\": \"1\",\n         \"notes\": null,\n         \"is_visible\": true\n     },\n     \"CityFrom\": {\n         \"id\": \"1\",\n         \"parent_id\": \"0\",\n         \"name\": \"Cairo\",\n         \"branch_id\": \"1\",\n         \"country_id\": \"64\",\n         \"is_visible\": true,\n         \"lat\": \"30.0444196\",\n         \"lng\": \"31.23571160000006\"\n     },\n     \"CityTo\": {\n         \"id\": \"1\",\n         \"parent_id\": \"0\",\n         \"name\": \"Cairo\",\n         \"branch_id\": \"1\",\n         \"country_id\": \"64\",\n         \"is_visible\": true,\n         \"lat\": \"30.0444196\",\n         \"lng\": \"31.23571160000006\"\n     }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/sightseeings",
    "title": "List Sightseeings",
    "name": "ListSightseeings",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Pagination page number</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n  {\n  \"msg\": \"fetched thingstodos\",\n  \"count\": 890,\n  \"limit\": 100,\n  \"current_page\": 1,\n  \"last_page\": 9,\n  \"thingstodos\": [\n     {\n         \"Thingstodo\": {\n             \"id\": \"15\",\n             \"city_id\": \"1\",\n             \"to_city_id\": \"1\",\n             \"name\": \"Abusir Pyramids\",\n             \"accounting_tickets_menu\": null,\n             \"acc_expense_id\": null,\n             \"duration\": \"\",\n            \"price\": \"20.00\",\n             \"currency_id\": \"3\",\n             \"is_visible\": true,\n             \"thingstodo_type\": \"1\",\n             \"starts_at\": null\n         },\n         \"ToCity\": {\n             \"id\": \"1\",\n             \"name\": \"Cairo\",\n         },\n         \"City\": {\n             \"id\": \"1\",\n             \"name\": \"Cairo\",\n          },\n         \"Currency\": {\n             \"id\": \"2\",\n            \"abbrev\": \"USD\",\n            \"symbol\": \"&#36;\"\n        },\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "inventory/items/supplements",
    "title": "List Supplements",
    "name": "ListSupplements",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n  {\n  \"limit\": 100,\n  \"count\": 11,\n  \"current_page\": 1,\n  \"last_page\": 1,\n  \"supplements\": [\n       {\n          \"id\": \"1\",\n          \"title\": \"H.B.\",\n          \"is_visible\": true\n       }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "inventory/items/supplements-names",
    "title": "List Supplements Names",
    "name": "ListSupplementsNames",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n  {\n  \"Supplements\": {\n      \"1\": \"H.B.\",\n      \"11\": \"hello\",\n      \"12\": \"helloall\",\n      \"13\": \"hello\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/routes-name",
    "title": "List Transfer Routes names",
    "name": "ListTransferNames",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Routes\": {\n        \"3\": \"Cairo Airport / Down Town \",\n        \"4\": \"Cairo airport / 6 october  city\",\n        \"5\": \"Train station / Cairo down town \",\n        \"6\": \"Full day / Down town (Cairo)\",\n        \"7\": \"Full day pyramids / Memphis / Dahshoor\",\n        \"8\": \"Half day Pyramids \",\n        \"9\": \"Dinner on cruise (Cairo)\",\n        \"10\": \"Open day in Cairo\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/sightseeings-list",
    "title": "Sightseeings List",
    "name": "SightseeingsList",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"Thingstodos\": {\n     \"2\": \"Step Pyramid at Saqqara \",\n     \"3\": \"Salah El Din / Mohamed Ali Citadel\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/sightseeings-types",
    "title": "Sightseeings Types",
    "name": "SightseeingsTypes",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"msg\": \"Succesfully get all thingstodos type list\",\n  \"Types\": {\n      \"1\": \"Sightseeing\",\n      \"2\": \"Activity / Show\",\n      \"19\": \"Other Service\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "/inventory/items/cruises/:id",
    "title": "Update Cruise",
    "name": "UpdateCruise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n     \"Cruise\":{\n         \"name\":\"yygy\",\n          \"star_rating_id\":\"3\",\n          \"contact_person\":\"\",\n          \"mobile\":\"\",\n          \"email\":\"fff@w.net\",\n          \"tax_card_num\":\"\",\n          \"children_policy\":\"\",\n          \"notes\":\"\",\n          \"cruise_type_id\":\"1\",\n          \"city_id\":\"233\",\n          \"phone\":\"8888\",\n          \"fax\":\"\",\n          \"website\":\"\",\n         }\n}",
          "type": "json"
        }
      ]
    },
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Cruise\": {\n      \"id\": \"208\",\n      \"cruise_type_id\": \"1\",\n      \"star_rating_id\": \"3\",\n      \"city_id\": \"233\",\n      \"name\": \"yygy\",\n      \"contact_person\": \"\",\n      \"phone\": \"8888\",\n      \"fax\": \"\",\n      \"mobile\": \"\",\n      \"email\": \"fff@w.net\",\n      \"website\": \"\",\n      \"children_policy\": \"\",\n      \"supplements\": \"\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 10:06:02\",\n      \"inc_sightseeing\": false,\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  },\n  \"CruiseType\": {\n      \"id\": \"1\",\n      \"parent_id\": \"0\",\n      \"name\": \"Nile Cruise\",\n      \"description\": \"Nile Cruise in Egypt is the best thing You can do when you come\",\n      \"is_visible\": true\n  },\n  \"msg\": \"Cruise successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "/inventory/items/hotels/:hotel_id",
    "title": "Update Hotel",
    "name": "UpdateHotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $hotelId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n     \"Hotel\":{\n         \"name\":\"yygy\",\n          \"star_rating_id\":\"3\",\n          \"mobile\":\"\",\n          \"email\":\"fff@w.net\",\n          \"tax_card_num\":\"\",\n          \"notes\":\"\",\n          \"city_id\":\"233\",\n          \"phone\":\"8888\",\n          \"fax\":\"\",\n          \"website\":\"\",\n     }\n}",
          "type": "json"
        }
      ]
    },
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n  \"Hotel\": {\n      \"id\": \"2158\",\n      \"city_id\": \"233\",\n      \"name\": \"tnyshooy\",\n      \"star_rating_id\": \"3\",\n      \"contact_person\": \"\",\n      \"phone\": \"\",\n      \"fax\": \"\",\n      \"mobile\": \"00000\",\n      \"email\": \"test@xx.com\",\n      \"website\": \"\",\n      \"address\": \"\",\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 12:36:44\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  }\n  \"msg\": \"Hotel successfully Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "/inventory/items/restaurants/:id",
    "title": "Update Restaurant",
    "name": "UpdateRestaurant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $restaurantId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   {\n   \"Restaurant\":{\n       \"name\":\"hchyt\",\n       \"address\":\"yyy\",\n       \"phone\":\"777\",\n       \"fax\":\"\",\n       \"city_id\":\"187\",\n       \"email\":\"\",\n       \"website\":\"\",\n   }\n}",
          "type": "json"
        }
      ]
    },
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 ok\n   {\n    \"Restaurant\": {\n        \"id\": \"67\",\n        \"name\": \"hchyht\",\n        \"address\": \"yyy\",\n        \"phone\": \"777\",\n        \"fax\": \"\",\n        \"email\": \"\",\n        \"restaurant_category_id\": \"1\",\n        \"city_id\": \"187\",\n        \"website\": \"\",\n        \"tax_card_num\": null,\n        \"payment_terms\": \"1\",\n        \"is_visible\": true,\n        \"contact_person\": null,\n        \"payment_information\": \"\"\n    },\n    \"City\": {\n        \"id\": \"187\",\n        \"name\": \" BIRMINGHAM\"\n    },\n    \"msg\": \"Succesfully Updated the requested restaurant\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "/inventory/items/sightseeings/:id",
    "title": "Update Sightseeing",
    "name": "UpdateSightseeing",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numnber",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory itemId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n  \"Thingstodo\":{\n      \"name\":\"Create  sightseeing\",\n      \"city_id\":1,\n      \"to_city_id\":43,\n      \"duration\":\"3\",\n      \"starts_at\":\"8:30\",\n      \"price\":\"250\",\n      \"currency_id\":\"3\",\n      \"thingstodo_type\":1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Thingstodo\": {\n      \"id\": \"1187\",\n      \"city_id\": \"1\",\n      \"to_city_id\": \"43\",\n      \"name\": \"Pyramid\",\n      \"accounting_tickets_menu\": null,\n      \"acc_expense_id\": null,\n      \"duration\": \"3\",\n      \"price\": \"250.00\",\n      \"currency_id\": \"3\",\n      \"is_visible\": true,\n      \"thingstodo_type\": \"1\",\n      \"starts_at\": \"8:30\"\n  },\n  \"ToCity\": {\n      \"id\": \"43\",\n      \"name\": \"Jordon - Petra (Country)\"\n  },\n  \"City\": {\n      \"id\": \"1\",\n      \"name\": \"Cairo\"\n  },\n  \"msg\": \"Pyramid updated successfully!\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "inventory/items/supplements/:id",
    "title": "Update Supplement",
    "name": "UpdateSupplement",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"AccommodationSupplement\":{\n     \"title\":\"hello\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n {\n   \"AccommodationSupplement\": {\n      \"id\": \"11\",\n      \"title\": \"hello\",\n      \"is_visible\": true\n    },\n    \"msg\": \"Supplement successfully updated\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/cruises/id",
    "title": "View Cruise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "name": "ViewCruise",
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Cruise\": {\n      \"id\": \"208\",\n      \"cruise_type_id\": \"1\",\n      \"star_rating_id\": \"3\",\n      \"city_id\": \"233\",\n      \"name\": \"yygy\",\n      \"contact_person\": \"\",\n      \"phone\": \"8888\",\n      \"fax\": \"\",\n      \"mobile\": \"\",\n      \"email\": \"fff@w.net\",\n      \"website\": \"\",\n      \"children_policy\": \"\",\n      \"supplements\": \"\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 10:06:02\",\n      \"inc_sightseeing\": false,\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  },\n  \"CruiseType\": {\n      \"id\": \"1\",\n      \"parent_id\": \"0\",\n      \"name\": \"Nile Cruise\",\n      \"description\": \"Nile Cruise in Egypt is the best thing You can do when you come\",\n      \"is_visible\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/hotels/:hotel_id",
    "title": "View Hotel",
    "name": "ViewHotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>Mandatory $hotelId</p>"
          }
        ]
      }
    },
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n  \"Hotel\": {\n      \"id\": \"2158\",\n      \"city_id\": \"233\",\n      \"name\": \"tnyshooy\",\n      \"star_rating_id\": \"3\",\n      \"contact_person\": \"\",\n      \"phone\": \"\",\n      \"fax\": \"\",\n      \"mobile\": \"00000\",\n      \"email\": \"test@xx.com\",\n      \"website\": \"\",\n      \"address\": \"\",\n      \"tax_card_num\": \"\",\n      \"payment_terms\": \"0\",\n      \"notes\": \"\",\n      \"contract_file\": null,\n      \"created_by\": \"1\",\n      \"created\": \"2018-03-11 12:36:44\",\n      \"is_visible\": true,\n      \"payment_information\": \"\"\n  },\n  \"CreatedBy\": {\n      \"id\": \"1\",\n      \"name\": \"yasee\"\n   },\n  \"City\": {\n      \"id\": \"233\",\n      \"name\": \" ABHA \",\n  },\n \"StarRating\": {\n      \"id\": \"3\",\n      \"title\": \"3 Star\",\n      \"is_visible\": true\n  }\n  \"msg\": \"Hotel successfully Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/restaurants/:id",
    "title": "View Restaurant",
    "name": "ViewRestaurant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $restaurantId</p>"
          }
        ]
      }
    },
    "group": "Inventory",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 ok\n   {\n    \"Restaurant\": {\n        \"id\": \"67\",\n        \"name\": \"hchyht\",\n        \"address\": \"yyy\",\n        \"phone\": \"777\",\n        \"fax\": \"\",\n        \"email\": \"\",\n        \"restaurant_category_id\": \"1\",\n        \"city_id\": \"187\",\n        \"website\": \"\",\n        \"tax_card_num\": null,\n        \"payment_terms\": \"1\",\n        \"is_visible\": true,\n        \"contact_person\": null,\n        \"payment_information\": \"\"\n    },\n    \"City\": {\n        \"id\": \"187\",\n        \"name\": \" BIRMINGHAM\"\n    },\n    \"msg\": \"fetched restaurant\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "GET",
    "url": "/inventory/items/routes/:id",
    "title": "View Route Data",
    "name": "ViewRoute",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Route Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n{\n   \"routes\": {\n       \"TransferRoute\": {\n           \"id\": \"8\",\n           \"title\": \"Half day Pyramids \",\n           \"from_txt\": null,\n           \"to_txt\": null,\n           \"city_from_id\": \"1\",\n           \"city_to_id\": \"1\",\n           \"notes\": null,\n           \"is_visible\": true\n       },\n       \"CityFrom\": {\n           \"name\": \"Cairo\"\n       },\n       \"CityTo\": {\n           \"name\": \"Cairo\"\n       }\n   }\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"msg\": \"Route not found.\",\n   \"errors\": {\n        \"msg\": \"Invalid Route ID provided.\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/items/sightseeings/:id",
    "title": "View Sightseeing",
    "name": "ViewSightseeing",
    "group": "Inventory",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numnber",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory itemId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"Thingstodo\": {\n      \"id\": \"15\",\n      \"city_id\": \"1\",\n      \"to_city_id\": \"1\",\n      \"name\": \"Abusir Pyramids\",\n      \"accounting_tickets_menu\": null,\n      \"acc_expense_id\": null,\n      \"duration\": \"\",\n      \"price\": \"20.00\",\n      \"currency_id\": \"3\",\n      \"is_visible\": true,\n      \"thingstodo_type\": \"1\",\n      \"starts_at\": null\n  },\n  \"ToCity\": {\n      \"id\": \"1\",\n      \"name\": \"Cairo\"\n  },\n  \"Currency\": {\n      \"id\": \"3\",\n      \"abbrev\": \"EGP\",\n      \"symbol\": \"L.E.\"\n  },\n  \"City\": {\n      \"id\": \"1\",\n      \"name\": \"Cairo\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "inventory/items/supplements/:id",
    "title": "View Supplement",
    "name": "ViewSupplement",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n  {\n   \"AccommodationSupplement\": {\n      \"id\": \"12\",\n      \"title\": \"helloall\",\n     \"is_visible\": true\n   },\n   \"msg\": \"Fetched Supplements\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/invoices/main/:request_id",
    "title": "Create new Invoice",
    "name": "CreateInvoice",
    "group": "Invoices",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n  \"Invoice\":{\n      \"invoice_title\":\"ok\",\n      \"invoice_due_on\":\"2010-02-14\",\n      \"currency_id\":\"1\",\n      \"Items\":[\n        {\n         \"include\":\"1\",\n         \"price\":\"0\",\n         \"description\":\"Transfers By Car<\\/b> yas on 2010-02-20 \",\n         \"model\":\"RequestTransferRoute\",\n         \"modelId\":\"203\",\n         \"date\":\"2010-02-14\"\n       }\n    ],\n    \"total\":\"0\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 created\n  {\n    \"Invoice\": {\n       \"id\": \"8689\",\n       \"model\": \"Request\",\n       \"model_id\": \"90\",\n       \"client_id\": null,\n       \"staff_id\": \"1\",\n       \"invoice_number\": \"INV-00009 / 2018\",\n       \"invoice_title\": \"ok\",\n       \"invoice_date\": \"2018-03-04\",\n       \"invoice_due_on\": \"2010-02-14\",\n       \"print_counts\": null,\n       \"download_counts\": null,\n       \"plugin\": \"Travel\",\n       \"items\": \"{\\\"InvoiceItem\\\":[{\\\"date\\\":\\\"2010-02-14\\\",\\\"title\\\":\\\"\\\",\\\"desc\\\":\\\"Transfers By Car<\\\\/b> yas on 2010-02-20 \\\",\\\"qty\\\":1,\\\"price\\\":\\\"0\\\"},{\\\"date\\\":\\\"2010-02-14\\\",\\\"title\\\":\\\"\\\",\\\"desc\\\":\\\"Sightseeing<\\\\/b> Temple of  Kom Ombo \\\",\\\"qty\\\":1,\\\"price\\\":\\\"0\\\"}],\\\"InvoicesModels\\\":{\\\"RequestTransferRoute\\\":[\\\"203\\\"],\\\"RequestsThingstodo\\\":[\\\"299\\\"]}}\",\n       \"total\": \"0.00\",\n       \"subtotal\": \"0.00\",\n       \"paid\": \"0.00\",\n       \"amount_due\": \"0.00\",\n       \"currency_id\": \"1\",\n       \"tax_percentage\": null,\n       \"actions_history\": null,\n       \"status\": null,\n       \"is_visible\": true,\n       \"is_recurring\": null,\n       \"cancelled\": false,\n       \"created\": \"2018-03-04 14:23:25\",\n       \"modified\": \"2018-03-04 14:23:25\"\n   },\n   \"msg\": \"Successfully created invoice\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Invoices"
  },
  {
    "type": "delete",
    "url": "/invoices/main/:id",
    "title": "Delete an Invoice",
    "name": "DeleteInvoice",
    "group": "Invoices",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Invoice Successfully Canceled\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Invoices"
  },
  {
    "type": "get",
    "url": "/invoices/main/:request_id",
    "title": "List Request Invoices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": ""
          }
        ]
      }
    },
    "name": "ListRequestInvoices",
    "group": "Invoices",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"invoices\": [\n  {\n     \"Invoice\": {\n        \"id\": \"8689\",\n        \"model\": \"Request\",\n        \"model_id\": \"90\",\n        \"client_id\": null,\n        \"staff_id\": \"1\",\n        \"invoice_number\": \"INV-00009 / 2018\",\n        \"invoice_title\": \"ok\",\n        \"invoice_date\": \"2018-03-04\",\n        \"invoice_due_on\": \"2010-02-14\",\n        \"print_counts\": null,\n        \"download_counts\": null,\n        \"plugin\": \"Travel\",\n        \"items\": \"{\\\"InvoiceItem\\\":[{\\\"date\\\":\\\"2010-02-14\\\",\\\"title\\\":\\\"\\\",\\\"desc\\\":\\\"Transfers By Car<\\\\/b> yas on 2010-02-20 \\\",\\\"qty\\\":1,\\\"price\\\":\\\"0\\\"},{\\\"date\\\":\\\"2010-02-14\\\",\\\"title\\\":\\\"\\\",\\\"desc\\\":\\\"Sightseeing<\\\\/b> Temple of  Kom Ombo \\\",\\\"qty\\\":1,\\\"price\\\":\\\"0\\\"}],\\\"InvoicesModels\\\":{\\\"RequestTransferRoute\\\":[\\\"203\\\"],\\\"RequestsThingstodo\\\":[\\\"299\\\"]}}\",\n        \"total\": \"0.00\",\n        \"subtotal\": \"0.00\",\n        \"paid\": \"0.00\",\n        \"amount_due\": \"0.00\",\n        \"currency_id\": \"1\",\n        \"tax_percentage\": null,\n        \"actions_history\": null,\n        \"status\": null,\n        \"is_visible\": true,\n        \"is_recurring\": null,\n        \"cancelled\": false,\n        \"created\": \"2018-03-04 14:23:25\",\n        \"modified\": \"2018-03-04 14:23:25\"\n    },\n    \"Currency\": {\n        \"id\": \"1\",\n        \"currency\": \"Euro\",\n        \"abbrev\": \"EUR\",\n        \"symbol\": \"&#8364;\",\n        \"symbol_direction\": true,\n        \"is_visible\": true\n    },\n    \"Staff\": {\n        \"name\": \"Yasmine Alaa\"\n    }\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Invoices"
  },
  {
    "type": "get",
    "url": "/invoices/items/:request_id",
    "title": "List Request Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": ""
          }
        ]
      }
    },
    "name": "ListRequestItems",
    "group": "Invoices",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"items\": {\n    \"RequestTransferRoute\": [],\n    \"RequestsTrainTicket\": [],\n    \"RequestsHotel\": []\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Invoices"
  },
  {
    "type": "get",
    "url": "/invoices/main/:request_id/:id",
    "title": "View Invoice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "name": "ViewInvoice",
    "group": "Invoices",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"msg\": \"Successfully found item.\",\n \"Invoice\": {\n        \"id\": \"8689\",\n        \"model\": \"Request\",\n        \"model_id\": \"90\",\n        \"client_id\": null,\n        \"staff_id\": \"1\",\n        \"invoice_number\": \"INV-00009 / 2018\",\n        \"invoice_title\": \"ok\",\n        \"invoice_date\": \"2018-03-04\",\n        \"invoice_due_on\": \"2010-02-14\",\n        \"print_counts\": null,\n        \"download_counts\": null,\n        \"plugin\": \"Travel\",\n        \"items\": \"{\\\"InvoiceItem\\\":[{\\\"date\\\":\\\"2010-02-14\\\",\\\"title\\\":\\\"\\\",\\\"desc\\\":\\\"Transfers By Car<\\\\/b> yas on 2010-02-20 \\\",\\\"qty\\\":1,\\\"price\\\":\\\"0\\\"},{\\\"date\\\":\\\"2010-02-14\\\",\\\"title\\\":\\\"\\\",\\\"desc\\\":\\\"Sightseeing<\\\\/b> Temple of  Kom Ombo \\\",\\\"qty\\\":1,\\\"price\\\":\\\"0\\\"}],\\\"InvoicesModels\\\":{\\\"RequestTransferRoute\\\":[\\\"203\\\"],\\\"RequestsThingstodo\\\":[\\\"299\\\"]}}\",\n        \"total\": \"0.00\",\n        \"subtotal\": \"0.00\",\n        \"paid\": \"0.00\",\n        \"amount_due\": \"0.00\",\n        \"currency_id\": \"1\",\n        \"tax_percentage\": null,\n        \"actions_history\": null,\n        \"status\": null,\n        \"is_visible\": true,\n        \"is_recurring\": null,\n        \"cancelled\": false,\n        \"created\": \"2018-03-04 14:23:25\",\n        \"modified\": \"2018-03-04 14:23:25\"\n    },\n    \"Currency\": {\n        \"id\": \"1\",\n        \"currency\": \"Euro\",\n        \"abbrev\": \"EUR\",\n        \"symbol\": \"&#8364;\",\n        \"symbol_direction\": true,\n        \"is_visible\": true\n    },\n    \"Request\": {\n        \"id\": \"90\",\n        \"subject\": \"Lead title test\",\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\",\n        \"num_of_adults\": null,\n        \"num_of_children\": null,\n        \"all_reminders_used\": false,\n        \"request_status_id\": \"8\",\n        \"source_id\": \"1\",\n        \"sub_source_\n    },\n    \"Staff\": {\n        \"name\": \"Yasmine Alaa\"\n    }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Invoices"
  },
  {
    "type": "GET",
    "url": "/items/car-types-list",
    "title": "List Car Types",
    "name": "ListCarTypes",
    "group": "Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"CarTypes\": {\n     \"1\": \"Mini-Bus [11]\",\n     \"3\": \"City Bus [16]\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/items/child-ages-list",
    "title": "List Child ages",
    "name": "ListChildAges",
    "group": "Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"ChildAges\": {\n     \"1\": \"0 - 3\",\n     \"3\": \"3-12\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/items/meal-plans-list",
    "title": "List Meal Plans",
    "name": "ListMealPlans",
    "group": "Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"MealPlans\": {\n     \"1\": \"B.B.\",\n     \"3\": \"H.B.\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/items/room-types/:id",
    "title": "List Room Types",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory hotelId</p>"
          }
        ]
      }
    },
    "name": "ListRoomtTypes",
    "group": "Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"RoomTypes\": {\n     \"1\": \"Single\",\n     \"2\": \"Double\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items"
  },
  {
    "type": "GET",
    "url": "/items/tour-types",
    "title": "List Tour Types",
    "name": "ListTourTypes",
    "group": "Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"TourTypes\": {\n     \"private\": \"Private\",\n     \"semi_private\": \"Semi Private\",\n     \"group\": \"Group\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items"
  },
  {
    "type": "delete",
    "url": "/items/cruises/:request_id/:item_id",
    "title": "Delete Lead Cruise",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Item unique ID</p>"
          }
        ]
      }
    },
    "name": "DeleteRequestCruise",
    "group": "Items_Cruises",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Element successfully deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOt Found\n{\n      \"msg\": \"Failed to delete record.\",\n      \"errors\": {\n          \"msg\": \"Invalid ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Cruises"
  },
  {
    "type": "get",
    "url": "/items/cruises/:request_id",
    "title": "List Lead Cruises",
    "version": "0.1.0",
    "name": "ListLeadCruises",
    "group": "Items_Cruises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"msg\": \"Success\",\n   \"cruises\": [\n       {\n           \"RequestsCruise\": {\n               \"id\": \"69\",\n               \"request_id\": \"23\",\n               \"currency_id\": null,\n               \"cruise_id\": \"22\",\n               \"embarkation_date\": \"2010-05-15\",\n               \"disembarkation_date\": \"2010-05-18\",\n               \"cost_value\": null,\n               \"cost_currency_id\": null,\n               \"selling_price\": \"0\",\n               \"selling_price_currency_id\": null,\n               \"num_of_singles\": \"0\",\n               \"num_of_doubles\": \"1\",\n               \"num_of_triples\": \"0\",\n               \"reservation_date\": null,\n               \"reservation_status_id\": \"1\",\n               \"created\": \"2010-03-25 13:13:39\",\n               \"cabin_notes\": null,\n               \"is_option\": null,\n               \"added_by\": \"8\",\n               \"acc_journal_id\": null,\n               \"payment_date\": null,\n               \"is_cost_approved\": null,\n               \"added_by_guide_id\": null,\n               \"parent_id\": null,\n               \"is_trip\": false,\n               \"contract_value\": null,\n               \"contract_currency_id\": null,\n               \"option_payment_method\": null\n           },\n           \"AddedBy\": {\n               \"name\": \"Alaa Khaled\"\n           },\n           \"Cruise\": {\n               \"name\": \"M\\/S Sonesta Moon Goddess\"\n           },\n           \"Currency\": {\n               \"id\": null,\n               \"currency\": null,\n                \"abbrev\": null,\n                \"symbol\": null,\n                \"symbol_direction\": null,\n                \"is_visible\": null\n            },\n            \"RequestsHotelRoom\": [],\n            \"RequestsHotelOption\": []\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Cruises"
  },
  {
    "type": "get",
    "url": "/items/cruises/:request_id/:id",
    "title": "View Cruise",
    "version": "0.1.0",
    "name": "ViewCruise",
    "group": "Items_Cruises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"msg\": \"Cruise Request Found Successfully.\"\",\n   \"RequestsCruise\": {\n               \"id\": \"69\",\n               \"request_id\": \"23\",\n               \"currency_id\": null,\n               \"cruise_id\": \"22\",\n               \"embarkation_date\": \"2010-05-15\",\n               \"disembarkation_date\": \"2010-05-18\",\n               \"cost_value\": null,\n               \"cost_currency_id\": null,\n               \"selling_price\": \"0\",\n               \"selling_price_currency_id\": null,\n               \"num_of_singles\": \"0\",\n               \"num_of_doubles\": \"1\",\n               \"num_of_triples\": \"0\",\n               \"reservation_date\": null,\n               \"reservation_status_id\": \"1\",\n               \"created\": \"2010-03-25 13:13:39\",\n               \"cabin_notes\": null,\n               \"is_option\": null,\n               \"added_by\": \"8\",\n               \"acc_journal_id\": null,\n               \"payment_date\": null,\n               \"is_cost_approved\": null,\n               \"added_by_guide_id\": null,\n               \"parent_id\": null,\n               \"is_trip\": false,\n               \"contract_value\": null,\n               \"contract_currency_id\": null,\n               \"option_payment_method\": null\n           },\n           \"AddedBy\": {\n               \"name\": \"Alaa Khaled\"\n           },\n           \"Cruise\": {\n               \"name\": \"M\\/S Sonesta Moon Goddess\"\n           },\n           \"Currency\": {\n               \"id\": null,\n               \"currency\": null,\n                \"abbrev\": null,\n                \"symbol\": null,\n                \"symbol_direction\": null,\n                \"is_visible\": null\n            },\n            \"RequestsHotelRoom\": [],\n            \"RequestsHotelOption\": []\n        }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Cruises"
  },
  {
    "type": "post",
    "url": "/items/cruises/:request_id",
    "title": "Create Cruise Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"RequestsCruise\":{\n       \"id\":\"\",\n       \"market_type_id\":\"3\",\n       \"embarkation_date\":\"2018-04-02\",\n       \"cruise_id\":\"17\",\n       \"disembarkation_date\":\"2018-04-11\",\n       \"RoomInfo\":[\n           {\n            \"num_of_rooms\":\"2\",\n            \"room_type_id\":\"-2\",\n            \"adult\":\"1\",\n            \"children\":\"1\",\n            \"notes\":\"help\",\n            \"ChildInfo\":[\n                {\n                   \"children_age_id\":\"2\"\n                }\n             ],\n            \"Supplement\":[\n                {\n                   \"num_of_supplement\":\"1\",\n                   \"accomdation_supplement_id\":\"1\"\n                }\n            ]\n          }\n     ],\n   \"contract_value\":\"\",\n   \"contract_currency_id\":\"1\",\n   \"selling_value\":\"\",\n   \"selling_currency_id\":\"\",\n   \"selling_price\":\"\",\n   \"selling_price_currency_id\":\"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "createRequestCruiseItem",
    "group": "Items_Cruises",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n  {\n   \"msg\": \"Cruise successfully added\",\n   {\n      \"RequestsCruise\": {\n           \"id\": \"17790\",\n           \"request_id\": \"90\",\n           \"currency_id\": null,\n           \"cruise_id\": \"17\",\n           \"embarkation_date\": \"2018-04-02\",\n           \"disembarkation_date\": \"2018-04-11\",\n           \"cost_value\": null,\n           \"cost_currency_id\": null,\n           \"selling_price\": null,\n           \"selling_price_currency_id\": \"1\",\n           \"num_of_singles\": \"2\",\n           \"num_of_doubles\": \"2\",\n           \"num_of_triples\": \"0\",\n           \"reservation_date\": null,\n           \"reservation_status_id\": \"1\",\n           \"created\": \"2018-02-21 11:24:59\",\n           \"cabin_notes\": null,\n           \"is_option\": \"0\",\n           \"acc_journal_id\": null,\n           \"payment_date\": null,\n           \"added_by\": \"1\",\n           \"is_cost_approved\": false,\n           \"added_by_guide_id\": null,\n           \"parent_id\": null,\n           \"is_trip\": false,\n           \"market_type_id\": \"3\",\n           \"contract_value\": null,\n           \"contract_currency_id\": \"1\",\n           \"option_payment_method\": null\n       },\n      \"AddedBy\": {\n           \"name\": \"Yasmine Alaa\"\n       },\n      \"Cruise\": {\n           \"name\": \"M/S Nile Monarch\"\n       },\n       \"Currency\": {\n           \"id\": null,\n           \"currency\": null,\n           \"abbrev\": null,\n           \"symbol\": null,\n           \"symbol_direction\": null,\n           \"is_visible\": null\n       },\n       \"RequestsHotelRoom\": [\n          {\n            \"id\": \"54520\",\n            \"requests_hotel_id\": null,\n            \"num_of_rooms\": \"2\",\n            \"room_type_id\": \"-2\",\n            \"adult\": \"1\",\n            \"children\": \"1\",\n            \"meal_plan_id\": null,\n            \"children_age\": \"\",\n            \"notes\": \"help\",\n            \"requests_cruise_id\": \"17790\",\n            \"room_confirm_num\": null,\n            \"RoomType\": [],\n            \"MealPlan\": []\n          }\n       ],\n       \"RequestsHotelOption\": [\n          {\n            \"id\": \"116\",\n            \"requests_hotel_id\": \"0\",\n            \"requests_hotel_room_id\": \"0\",\n            \"num_of_supplement\": \"1\",\n            \"accomdation_supplement_id\": \"1\",\n            \"requests_cruise_id\": \"17790\",\n            \"requests_cruise_room_id\": \"54520\",\n            \"AccommodationSupplement\": {\n                \"title\": \"H.B.\",\n                \"id\": \"1\"\n             }\n           }\n        ]\n      }\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Cruises"
  },
  {
    "type": "put",
    "url": "/items/cruises/:request_id/:item_id",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Item unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"RequestsCruise\":{\n       \"market_type_id\":\"3\",\n       \"embarkation_date\":\"2018-04-02\",\n       \"cruise_id\":\"17\",\n       \"disembarkation_date\":\"2018-04-11\",\n       \"RoomInfo\":[\n           {\n            \"num_of_rooms\":\"2\",\n            \"room_type_id\":\"-2\",\n            \"adult\":\"1\",\n            \"children\":\"1\",\n            \"notes\":\"help\",\n            \"ChildInfo\":[\n                {\n                   \"children_age_id\":\"2\"\n                }\n             ],\n            \"Supplement\":[\n                {\n                   \"num_of_supplement\":\"1\",\n                   \"accomdation_supplement_id\":\"1\"\n                }\n            ]\n          }\n     ],\n   \"contract_value\":\"\",\n   \"contract_currency_id\":\"1\",\n   \"selling_value\":\"\",\n   \"selling_currency_id\":\"\",\n   \"selling_price\":\"\",\n   \"selling_price_currency_id\":\"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "updateRequestCruiseItem",
    "group": "Items_Cruises",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n   \"msg\": \"Cruise successfully updated\",\n   {\n      \"RequestsCruise\": {\n           \"id\": \"17790\",\n           \"request_id\": \"90\",\n           \"currency_id\": null,\n           \"cruise_id\": \"17\",\n           \"embarkation_date\": \"2018-04-02\",\n           \"disembarkation_date\": \"2018-04-11\",\n           \"cost_value\": null,\n           \"cost_currency_id\": null,\n           \"selling_price\": null,\n           \"selling_price_currency_id\": \"1\",\n           \"num_of_singles\": \"2\",\n           \"num_of_doubles\": \"2\",\n           \"num_of_triples\": \"0\",\n           \"reservation_date\": null,\n           \"reservation_status_id\": \"1\",\n           \"created\": \"2018-02-21 11:24:59\",\n           \"cabin_notes\": null,\n           \"is_option\": \"0\",\n           \"acc_journal_id\": null,\n           \"payment_date\": null,\n           \"added_by\": \"1\",\n           \"is_cost_approved\": false,\n           \"added_by_guide_id\": null,\n           \"parent_id\": null,\n           \"is_trip\": false,\n           \"market_type_id\": \"3\",\n           \"contract_value\": null,\n           \"contract_currency_id\": \"1\",\n           \"option_payment_method\": null\n       },\n      \"AddedBy\": {\n           \"name\": \"Yasmine Alaa\"\n       },\n      \"Cruise\": {\n           \"name\": \"M/S Nile Monarch\"\n       },\n       \"Currency\": {\n           \"id\": null,\n           \"currency\": null,\n           \"abbrev\": null,\n           \"symbol\": null,\n           \"symbol_direction\": null,\n           \"is_visible\": null\n       },\n       \"RequestsHotelRoom\": [\n          {\n            \"id\": \"54520\",\n            \"requests_hotel_id\": null,\n            \"num_of_rooms\": \"2\",\n            \"room_type_id\": \"-2\",\n            \"adult\": \"1\",\n            \"children\": \"1\",\n            \"meal_plan_id\": null,\n            \"children_age\": \"\",\n            \"notes\": \"help\",\n            \"requests_cruise_id\": \"17790\",\n            \"room_confirm_num\": null,\n            \"RoomType\": [],\n            \"MealPlan\": []\n          }\n       ],\n       \"RequestsHotelOption\": [\n          {\n            \"id\": \"116\",\n            \"requests_hotel_id\": \"0\",\n            \"requests_hotel_room_id\": \"0\",\n            \"num_of_supplement\": \"1\",\n            \"accomdation_supplement_id\": \"1\",\n            \"requests_cruise_id\": \"17790\",\n            \"requests_cruise_room_id\": \"54520\",\n            \"AccommodationSupplement\": {\n                \"title\": \"H.B.\",\n                \"id\": \"1\"\n             }\n           }\n        ]\n      }\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Cruises"
  },
  {
    "type": "post",
    "url": "/items/custom/:request_id",
    "title": "Create Custom Item",
    "name": "Create_Custom_Item",
    "group": "Items_Custom",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request Unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"Item\": {\n        \"item_form_id\": 11,\n         \"fields\": {\n             \"hotel_name\": \"kkk\"\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n\n {\n    \"msg\": \"Created item.\",\n    \"item\": {\n        \"item_form_id\": 11,\n        \"fields\": [\n            {\n                \"name\": \"FIeLd 1 and hagata\"\n            }\n        ],\n        \"request_id\": \"23\",\n        \"staff_id\": \"1\",\n        \"modified\": \"2018-02-19 15:23:10\",\n        \"created\": \"2018-02-19 15:23:10\",\n        \"id\": \"35\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Created custom item in database.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Custom"
  },
  {
    "type": "delete",
    "url": "/items/custom/:request_id/:item_id",
    "title": "Delete Custom Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Items unique id</p>"
          }
        ]
      }
    },
    "name": "DeleteCustomItem",
    "group": "Items_Custom",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"msg\": \"Deleted item.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n    \"msg\": \"Item not found. Please, provide a valid item_id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Custom"
  },
  {
    "type": "put",
    "url": "/items/custom/:request_id/:item_id",
    "title": "Edit Custom Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Items unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n {\n     \"Item\": {\n          \"item_form_id\": 11,\n          \"fields\": [\n              {\n                  \"name\": \"new name\"\n              }\n          ]\n      }\n}",
          "type": "json"
        }
      ]
    },
    "name": "EditCustomItem",
    "group": "Items_Custom",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"msg\": \"Successfully updated item.\",\n    \"item\": {\n        \"id\": \"35\",\n        \"request_id\": \"23\",\n        \"item_form_id\": \"11\",\n        \"staff_id\": \"1\",\n        \"fields\": [\n            {\n                \"name\": \"new name\"\n            }\n        ],\n        \"created\": \"2018-02-19 15:23:10\",\n        \"modified\": \"2018-02-19 16:14:51\",\n        \"is_visible\": true,\n        \"price\": null,\n        \"currency_id\": null,\n        \"Currency\": {\n            \"id\": null,\n            \"currency\": null,\n            \"abbrev\": null,\n            \"symbol\": null,\n            \"symbol_direction\": null,\n            \"is_visible\": null\n        }\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Edited custom item in database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n    \"msg\": \"Item not found. Please, provide a valid item_id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Custom"
  },
  {
    "type": "get",
    "url": "/items/custom/:request_id/",
    "title": "List Custom Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          }
        ]
      }
    },
    "name": "ListCustomItems",
    "group": "Items_Custom",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"msg\": \"Retrieved custom items.\",\n    \"items\": {\n        \"Hotel + Sightseeing\": [\n            {\n                \"id\": \"13\",\n                \"request_id\": \"23\",\n                \"item_form_id\": \"11\",\n                \"staff_id\": \"1\",\n                \"fields\": {\n                    \"hotel_name\": \"kkk\",\n                    \"check_in_date\": \"2017-12-20\"\n                },\n                \"created\": \"2017-11-12 11:31:26\",\n                \"modified\": \"2017-11-12 11:31:26\",\n                \"is_visible\": true,\n                \"price\": null,\n                \"currency_id\": null,\n                \"Currency\": {\n                    \"id\": null,\n                    \"currency\": null,\n                    \"abbrev\": null,\n                    \"symbol\": null,\n                    \"symbol_direction\": null,\n                    \"is_visible\": null\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "items",
            "description": "<p>Retrieved items related to lead.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n    \"msg\": \"Item not found. Please, provide a valid item_id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Custom"
  },
  {
    "type": "get",
    "url": "/items/custom/:request_id/:item_id",
    "title": "View Custom Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Items unique id</p>"
          }
        ]
      }
    },
    "name": "ViewCustomItem",
    "group": "Items_Custom",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n    \"msg\": \"Retrieved item.\",\n    \"item\": {\n        \"id\": \"31\",\n        \"request_id\": \"23\",\n        \"item_form_id\": \"11\",\n        \"staff_id\": \"1\",\n        \"fields\": [\n            {\n                \"name\": \"new name\"\n            }\n        ],\n        \"created\": \"2018-02-19 14:23:48\",\n        \"modified\": \"2018-02-19 16:15:39\",\n        \"is_visible\": true,\n        \"price\": null,\n        \"currency_id\": null,\n        \"Currency\": {\n            \"id\": null,\n            \"currency\": null,\n            \"abbrev\": null,\n            \"symbol\": null,\n            \"symbol_direction\": null,\n            \"is_visible\": null\n        }\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Retrieved item related to lead.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n    \"msg\": \"Item not found. Please, provide a valid item_id.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Custom"
  },
  {
    "type": "POST",
    "url": "/items/flights/:requestId",
    "title": "Add New Flight",
    "version": "0.1.0",
    "name": "AddFlights",
    "group": "Items_Flights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n  \"RequestsFlight\":{\n     \"ticket_price\":\"1000\",\n     \"currency_id\":\"5\",\n     \"name\": \"no\"\n  },\n  \"RequestsFlightName\":[\n    {\n     \"name\":\"Deema Organization\",\n     \"ticket_number\":\"666\"\n    }\n  ],\n  \"RequestsFlightRoute\":[\n    {\n     \"departure_city\":\"419\",\n     \"departure_time\":\"2017-11-14 00:00\",\n      \"arrival_city\":\"41\",\n      \"arrival_time\":\"2017-11-27 00:00\",\n      \"flight_num\":\"7777\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n  \"msg\": \"Successfully Added New Flight Ticke\",\n  \"RequestsFlight\": {\n           \"request_id\": \"6629\",\n          \"currency_id\": \"3\",\n          \"name\": null,\n          \"ticket_price\": \"6.00\",\n          \"routes\": \"2\",\n          \"type\": \"0\",\n          \"created\": null,\n          \"modified\": null,\n          \"is_option\": null,\n          \"added_by\": \"6\",\n          \"cost_value\": null,\n          \"cost_currency_id\": null,\n          \"acc_journal_id\": null,\n          \"acc_srv_order_id\": null,\n          \"added_by_guide_id\": null,\n          \"parent_id\": null,\n          \"is_trip\": false\n      },\n      \"Currency\": {\n          \"id\": null,\n          \"currency\": null,\n          \"abbrev\": null,\n          \"symbol\": null,\n          \"symbol_direction\": null,\n          \"is_visible\": null\n      },\n      \"RequestsFlightRoute\": [],\n      \"RequestsFlightName\": [],\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Flights"
  },
  {
    "type": "DELETE",
    "url": "items/flights/:requestId/:Id",
    "title": "Delete Flight item",
    "version": "0.1.0",
    "name": "DeleteFlight",
    "group": "Items_Flights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Flight Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n  \"msg\": \"Flight data on file was successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n {\n \"error\": \"Flight data on file couldn't be deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Flights"
  },
  {
    "type": "PUT",
    "url": "/items/flights/:requestId/:Id",
    "title": "Edit Exisitng Flight",
    "version": "0.1.0",
    "name": "EditFlight",
    "group": "Items_Flights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Flight Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n  \"RequestsFlight\":{\n     \"ticket_price\":\"1000\",\n     \"currency_id\":\"5\",\n  },\n  \"RequestsFlightName\":[\n    {\n     \"name\":\"Deema Organization\",\n     \"ticket_number\":\"666\"\n    }\n  ],\n  \"RequestsFlightRoute\":[\n    {\n     \"departure_city\":\"419\",\n     \"departure_time\":\"2017-11-14 00:00\",\n      \"arrival_city\":\"41\",\n      \"arrival_time\":\"2017-11-27 00:00\",\n      \"flight_num\":\"7777\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "\n    {\n   \"msg\": \"Successfully Updated Flight'\",\n   \"RequestsFlight\": {\n               \"id\": \"29\",\n               \"request_id\": \"4314\",\n               \"currency_id\": null,\n               \"name\": null,\n               \"ticket_price\": \"100.00\",\n               \"routes\": null,\n               \"type\": null,\n               \"created\": \"2018-02-21 17:16:34\",\n               \"modified\": \"2018-02-21 17:55:49\",\n               \"is_option\": null,\n               \"added_by\": \"1\",\n               \"cost_value\": null,\n               \"cost_currency_id\": null,\n               \"acc_journal_id\": null,\n               \"acc_srv_order_id\": null,\n               \"added_by_guide_id\": null,\n               \"parent_id\": null,\n               \"is_trip\": false\n           },\n           \"Currency\": {\n               \"id\": null,\n               \"currency\": null,\n               \"abbrev\": null,\n               \"symbol\": null,\n               \"symbol_direction\": null,\n               \"is_visible\": null\n           },\n           \"RequestsFlightRoute\": [],\n           \"RequestsFlightName\": []\n       }\n\n}\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Lead ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Flights"
  },
  {
    "type": "GET",
    "url": "/items/flights/:requestId",
    "title": "List Lead Flights",
    "version": "0.1.0",
    "name": "ListLeadFlights",
    "group": "Items_Flights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "\n{\n  \"flights\": [\n  {\n      \"RequestsFlight\": {\n          \"id\": \"1576\",\n          \"request_id\": \"1\",\n          \"currency_id\": \"1\",\n          \"name\": null,\n          \"ticket_price\": \"100.00\",\n          \"routes\": \"2\",\n          \"type\": null,\n          \"created\": \"2012-02-27 19:56:33\",\n          \"modified\": \"2012-02-27 19:56:33\",\n          \"is_option\": \"1\",\n          \"added_by\": \"342\",\n          \"cost_value\": null,\n          \"cost_currency_id\": null,\n          \"acc_journal_id\": null,\n          \"acc_srv_order_id\": null,\n          \"added_by_guide_id\": null,\n          \"parent_id\": null,\n          \"is_trip\": false\n      },\n      \"Currency\": {\n          \"id\": \"1\",\n          \"currency\": \"Euro\",\n          \"abbrev\": \"EUR\",\n          \"symbol\": \"&#8364;\",\n          \"symbol_direction\": true,\n          \"is_visible\": true\n      },\n      \"RequestsFlightRoute\": [\n          {\n              \"id\": \"2425\",\n              \"requests_flight_id\": \"1576\",\n              \"departure_city\": \"2\",\n              \"departure_time\": \"2012-02-27 19:54:00\",\n              \"arrival_city\": \"1\",\n              \"arrival_time\": \"2012-02-28 20:54:00\",\n              \"flight_num\": \"1\",\n              \"order\": null,\n              \"ArrivalCity\": {\n                  \"id\": \"1\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Cairo\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"30.0444196\",\n                  \"lng\": \"31.23571160000006\"\n              },\n              \"DepartureCity\": {\n                  \"id\": \"2\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Alexandria\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"31.2000924\",\n                  \"lng\": \"29.91873869999995\"\n              }\n          },\n          {\n              \"id\": \"2426\",\n              \"requests_flight_id\": \"1576\",\n              \"departure_city\": \"2\",\n              \"departure_time\": \"2012-02-27 19:55:00\",\n              \"arrival_city\": \"1\",\n              \"arrival_time\": \"2012-02-28 20:55:00\",\n              \"flight_num\": \"2\",\n              \"order\": null,\n              \"ArrivalCity\": {\n                  \"id\": \"1\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Cairo\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"30.0444196\",\n                  \"lng\": \"31.23571160000006\"\n              },\n              \"DepartureCity\": {\n                  \"id\": \"2\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Alexandria\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"31.2000924\",\n                  \"lng\": \"29.91873869999995\"\n              }\n          }\n      ],\n      \"RequestsFlightName\": []\n  },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Lead ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Flights"
  },
  {
    "type": "GET",
    "url": "/items/flights/:requestId/:id",
    "title": "View Lead Flight",
    "version": "0.1.0",
    "name": "ViewLeadFlight",
    "group": "Items_Flights",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "\n  {\n    \"RequestsFlight\": {\n          \"id\": \"1576\",\n          \"request_id\": \"1\",\n          \"currency_id\": \"1\",\n          \"name\": null,\n          \"ticket_price\": \"100.00\",\n          \"routes\": \"2\",\n          \"type\": null,\n          \"created\": \"2012-02-27 19:56:33\",\n          \"modified\": \"2012-02-27 19:56:33\",\n          \"is_option\": \"1\",\n          \"added_by\": \"342\",\n          \"cost_value\": null,\n          \"cost_currency_id\": null,\n          \"acc_journal_id\": null,\n          \"acc_srv_order_id\": null,\n          \"added_by_guide_id\": null,\n          \"parent_id\": null,\n          \"is_trip\": false\n      },\n      \"Currency\": {\n          \"id\": \"1\",\n          \"currency\": \"Euro\",\n          \"abbrev\": \"EUR\",\n          \"symbol\": \"&#8364;\",\n          \"symbol_direction\": true,\n          \"is_visible\": true\n      },\n      \"RequestsFlightRoute\": [\n          {\n              \"id\": \"2425\",\n              \"requests_flight_id\": \"1576\",\n              \"departure_city\": \"2\",\n              \"departure_time\": \"2012-02-27 19:54:00\",\n              \"arrival_city\": \"1\",\n              \"arrival_time\": \"2012-02-28 20:54:00\",\n              \"flight_num\": \"1\",\n              \"order\": null,\n              \"ArrivalCity\": {\n                  \"id\": \"1\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Cairo\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"30.0444196\",\n                  \"lng\": \"31.23571160000006\"\n              },\n              \"DepartureCity\": {\n                  \"id\": \"2\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Alexandria\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"31.2000924\",\n                  \"lng\": \"29.91873869999995\"\n              }\n          },\n          {\n              \"id\": \"2426\",\n              \"requests_flight_id\": \"1576\",\n              \"departure_city\": \"2\",\n              \"departure_time\": \"2012-02-27 19:55:00\",\n              \"arrival_city\": \"1\",\n              \"arrival_time\": \"2012-02-28 20:55:00\",\n              \"flight_num\": \"2\",\n              \"order\": null,\n              \"ArrivalCity\": {\n                  \"id\": \"1\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Cairo\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"30.0444196\",\n                  \"lng\": \"31.23571160000006\"\n              },\n              \"DepartureCity\": {\n                  \"id\": \"2\",\n                  \"parent_id\": \"0\",\n                  \"name\": \"Alexandria\",\n                  \"branch_id\": \"1\",\n                  \"country_id\": \"64\",\n                  \"is_visible\": true,\n                  \"lat\": \"31.2000924\",\n                  \"lng\": \"29.91873869999995\"\n              }\n          }\n      \"RequestsFlightName\": []\n  },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Lead ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Flights"
  },
  {
    "type": "post",
    "url": "/items/request-hotels/:request_id",
    "title": "Add Hotel Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"RequestsHotel\":{\n      \"city_id\":\"1\",\n         \"checkin_date\":\"2018-04-01\",\n        \"hotel_id\":\"1622\",\n        \"checkout_date\":\"2018-04-11\",\n        \"market_type_id\":\"9\",\n        \"RoomInfo\":[\n         {\n             \"num_of_rooms\":\"1\",\n            \"room_type_id\":\"-1\",\n            \"adult\":\"1\",\n            \"children\":\"1\",\n            \"meal_plan_id\":\"2\",\n            \"room_confirm_num\":\"700\",\n            \"notes\":\"hello\",\n            \"ChildInfo\":[\n               {\n                 \"children_age_id\":\"1\"\n               }\n            ],\n            \"Supplement\":[\n                {\n                   \"num_of_supplement\":\"1\",\n                   \"accomdation_supplement_id\":\"3\"\n                }\n             ]\n         }\n     ],\n     \"contract_value\":\"\",\n     \"contract_currency_id\":\"1\",\n     \"selling_value\":\"\",\n     \"selling_currency_id\":\"\",\n     \"price\":\"\",\n     \"currency_id\":\"1\",\n      \"request_id\":\"247599\",\n   }\n}",
          "type": "json"
        }
      ]
    },
    "name": "CreateRequestHotelItem",
    "group": "Items_Hotels",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n  \"msg\": \"Hotel Successfully Added\",\n  {\n       \"RequestsHotel\": {\n           \"id\": \"36994\",\n           \"request_id\": \"90\",\n           \"hotel_id\": \"1622\",\n            \"checkin_date\": \"2018-04-01\",\n            \"checkout_date\": \"2018-04-11\",\n            \"price\": null,\n            \"currency_id\": \"1\",\n            \"num_of_singles\": \"1\",\n            \"num_of_doubles\": \"1\",\n            \"num_of_triples\": \"0\",\n             \"reservation_date\": null,\n            \"reservation_status_id\": \"1\",\n           \"created\": \"2018-02-04 15:27:57\",\n           \"modified\": \"2018-02-04 15:27:57\",\n           \"room_notes\": null,\n           \"meal_plan_id\": null,\n           \"added_by\": \"1\",\n           \"market_type_id\": \"9\",\n       },\n      \"AddedBy\": {\n          \"name\": \"Yasmine Alaa\"\n      },\n      \"Hotel\": {\n          \"name\": \"Le Meridien Cairo Airport\"\n       },\n      \"Currency\": {\n          \"id\": \"1\",\n          \"currency\": \"Euro\",\n          \"abbrev\": \"EUR\"\n      },\n        \"MarketType\": {\n            \"id\": \"9\",\n            \"market\": \"All Markets\",\n            \"description\": null,\n                \"is_visible\": true\n        },\n        \"RequestsHotelRoom\": [\n            {\n                \"id\": \"54464\",\n                \"requests_hotel_id\": \"36994\",\n                \"num_of_rooms\": \"1\",\n                \"room_type_id\": \"-1\",\n                \"adult\": \"1\",\n                \"children\": \"1\",\n                \"meal_plan_id\": \"2\",\n                \"children_age\": \"1\",\n                \"notes\": \"hello\",\n                \"room_confirm_num\": \"700\",\n                \"RoomType\": [],\n                \"MealPlan\": {\n                    \"id\": \"2\",\n                    \"title\": \"Half Board\",\n                    \"abbrev\": \"H.B.\",\n                    \"is_visible\": true\n                },\n                \"RequestsHotelOption\": []\n            }\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Hotels"
  },
  {
    "type": "delete",
    "url": "/items/hotels/:request_id/:item_id",
    "title": "Delete Lead Hotel",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Item unique ID</p>"
          }
        ]
      }
    },
    "name": "DeleteRequestHotel",
    "group": "Items_Hotels",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Element successfully deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"msg\": \"Failed to delete record.\",\n      \"errors\": {\n          \"msg\": \"Invalid ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Hotels"
  },
  {
    "type": "get",
    "url": "/items/hotels/:request_id",
    "title": "List Lead Hotels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "ListLeadHotels",
    "group": "Items_Hotels",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n     \"hotels\": [\n         {\n             \"RequestsHotel\": {\n                 \"id\": \"211\",\n                 \"request_id\": \"23\",\n                 \"hotel_id\": \"1200\",\n                 \"checkin_date\": \"2010-04-13\",\n                 \"checkout_date\": \"2010-04-14\",\n                 \"price\": \"0.00\",\n                 \"currency_id\": null,\n                 \"num_of_singles\": \"0\",\n                 \"num_of_doubles\": \"1\",\n                 \"num_of_triples\": \"0\",\n                 \"reservation_date\": null,\n                 \"reservation_status_id\": \"3\",\n                 \"created\": \"2010-03-25 13:25:42\",\n                 \"modified\": null,\n                 \"room_notes\": \"Twin Bed\",\n                 \"is_option\": null,\n                 \"meal_plan_id\": \"1\",\n                 \"added_by\": \"73\",\n                 \"acc_journal_id\": null,\n                 \"payment_date\": null,\n                 \"market_type_id\": null,\n                 \"cost_value\": null,\n                 \"cost_currency_id\": null,\n                 \"is_cost_approved\": null,\n                 \"added_by_guide_id\": null,\n                 \"parent_id\": null,\n                 \"is_trip\": false,\n                 \"selling_value\": null,\n                 \"selling_currency_id\": null,\n                 \"contract_value\": null,\n                 \"contract_currency_id\": null,\n                 \"confirmation_number\": null,\n                 \"option_payment_method\": null\n             },\n             \"AddedBy\": {\n                 \"name\": \"Yosri Abdallah\"\n             },\n             \"Hotel\": {\n                 \"name\": \"Movenpick Aswan Hotel\"\n             },\n             \"Currency\": {\n                 \"id\": null,\n                 \"currency\": null,\n                 \"abbrev\": null,\n                 \"symbol\": null,\n                 \"symbol_direction\": null,\n                 \"is_visible\": null\n             },\n             \"MealPlan\": {\n                 \"id\": \"1\",\n                 \"title\": \"Bed and Breakfast\",\n                 \"abbrev\": \"B.B.\",\n                 \"is_visible\": true\n             },\n             \"MarketType\": {\n                 \"id\": null,\n                 \"market\": null,\n                 \"description\": null,\n                 \"is_visible\": null\n             },\n             \"RequestsHotelRoom\": [\n                 {\n                     \"id\": \"349\",\n                     \"requests_hotel_id\": \"211\",\n                     \"num_of_rooms\": \"1\",\n                     \"room_type_id\": \"-2\",\n                     \"adult\": null,\n                     \"children\": null,\n                     \"meal_plan_id\": \"1\",\n                     \"children_age\": null,\n                     \"notes\": \"Twin Bed\",\n                     \"room_confirm_num\": null,\n                     \"RoomType\": [],\n                     \"ChildInfo\": []\n                 }\n             ],\n             \"RequestsHotelOption\": []\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Hotels"
  },
  {
    "type": "put",
    "url": "/items/hotels/:request_id/:item_id",
    "title": "Edit Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Item unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"RequestsHotel\":{\n      \"city_id\":\"1\",\n         \"checkin_date\":\"2018-04-01\",\n        \"hotel_id\":\"1622\",\n        \"checkout_date\":\"2018-04-11\",\n        \"market_type_id\":\"9\",\n        \"RoomInfo\":[\n         {\n             \"num_of_rooms\":\"1\",\n            \"room_type_id\":\"-1\",\n            \"adult\":\"1\",\n            \"children\":\"1\",\n            \"meal_plan_id\":\"2\",\n            \"room_confirm_num\":\"700\",\n            \"notes\":\"hello\",\n            \"ChildInfo\":[\n               {\n                 \"children_age_id\":\"1\"\n               }\n            ],\n            \"Supplement\":[\n                {\n                   \"num_of_supplement\":\"1\",\n                   \"accomdation_supplement_id\":\"3\"\n                }\n             ]\n         }\n     ],\n     \"contract_value\":\"\",\n     \"contract_currency_id\":\"1\",\n     \"selling_value\":\"\",\n     \"selling_currency_id\":\"\",\n     \"price\":\"\",\n     \"currency_id\":\"1\",\n      \"request_id\":\"247599\",\n   }\n}",
          "type": "json"
        }
      ]
    },
    "name": "UpdateRequestHotelItem",
    "group": "Items_Hotels",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"msg\": \"Hotel Successfully Updated\",\",\n  {\n    \"RequestsHotel\": {\n            \"id\": \"36994\",\n            \"request_id\": \"90\",\n            \"hotel_id\": \"1622\",\n            \"checkin_date\": \"2018-04-01\",\n            \"checkout_date\": \"2018-04-11\",\n            \"price\": null,\n            \"currency_id\": \"1\",\n            \"num_of_singles\": \"1\",\n            \"num_of_doubles\": \"1\",\n            \"num_of_triples\": \"0\",\n            \"reservation_date\": null,\n            \"reservation_status_id\": \"1\",\n            \"created\": \"2018-02-04 15:27:57\",\n            \"modified\": \"2018-02-04 15:27:57\",\n            \"room_notes\": null,\n            \"meal_plan_id\": null,\n            \"added_by\": \"1\",\n            \"market_type_id\": \"9\",\n       },\n      \"AddedBy\": {\n          \"name\": \"Yasmine Alaa\"\n      },\n      \"Hotel\": {\n          \"name\": \"Le Meridien Cairo Airport\"\n       },\n      \"Currency\": {\n          \"id\": \"1\",\n          \"currency\": \"Euro\",\n          \"abbrev\": \"EUR\"\n      },\n        \"MarketType\": {\n            \"id\": \"9\",\n            \"market\": \"All Markets\",\n            \"description\": null,\n                \"is_visible\": true\n        },\n        \"RequestsHotelRoom\": [\n            {\n                \"id\": \"54464\",\n                \"requests_hotel_id\": \"36994\",\n                \"num_of_rooms\": \"1\",\n                \"room_type_id\": \"-1\",\n                \"adult\": \"1\",\n                \"children\": \"1\",\n                \"meal_plan_id\": \"2\",\n                \"children_age\": \"1\",\n                \"notes\": \"hello\",\n                \"room_confirm_num\": \"700\",\n                \"RoomType\": [],\n                \"MealPlan\": {\n                    \"id\": \"2\",\n                    \"title\": \"Half Board\",\n                    \"abbrev\": \"H.B.\",\n                    \"is_visible\": true\n                },\n                \"RequestsHotelOption\": []\n            }\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Hotels"
  },
  {
    "type": "get",
    "url": "/items/hotels/:request_id/:id",
    "title": "View Lead Hotel",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unique",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Lead",
            "description": "<p>unique ID</p>"
          }
        ]
      }
    },
    "name": "ViewLeadHotel",
    "group": "Items_Hotels",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n     \"msg\": \"Hotel Request Found Successfully.\",\n      \"RequestsHotel\": {\n                 \"id\": \"211\",\n                 \"request_id\": \"23\",\n                 \"hotel_id\": \"1200\",\n                 \"checkin_date\": \"2010-04-13\",\n                 \"checkout_date\": \"2010-04-14\",\n                 \"price\": \"0.00\",\n                 \"currency_id\": null,\n                 \"num_of_singles\": \"0\",\n                 \"num_of_doubles\": \"1\",\n                 \"num_of_triples\": \"0\",\n                 \"reservation_date\": null,\n                 \"reservation_status_id\": \"3\",\n                 \"created\": \"2010-03-25 13:25:42\",\n                 \"modified\": null,\n                 \"room_notes\": \"Twin Bed\",\n                 \"is_option\": null,\n                 \"meal_plan_id\": \"1\",\n                 \"added_by\": \"73\",\n                 \"acc_journal_id\": null,\n                 \"payment_date\": null,\n                 \"market_type_id\": null,\n                 \"cost_value\": null,\n                 \"cost_currency_id\": null,\n                 \"is_cost_approved\": null,\n                 \"added_by_guide_id\": null,\n                 \"parent_id\": null,\n                 \"is_trip\": false,\n                 \"selling_value\": null,\n                 \"selling_currency_id\": null,\n                 \"contract_value\": null,\n                 \"contract_currency_id\": null,\n                 \"confirmation_number\": null,\n                 \"option_payment_method\": null\n             },\n             \"AddedBy\": {\n                 \"name\": \"Yosri Abdallah\"\n             },\n             \"Hotel\": {\n                 \"name\": \"Movenpick Aswan Hotel\"\n             },\n             \"Currency\": {\n                 \"id\": null,\n                 \"currency\": null,\n                 \"abbrev\": null,\n                 \"symbol\": null,\n                 \"symbol_direction\": null,\n                 \"is_visible\": null\n             },\n             \"MealPlan\": {\n                 \"id\": \"1\",\n                 \"title\": \"Bed and Breakfast\",\n                 \"abbrev\": \"B.B.\",\n                 \"is_visible\": true\n             },\n             \"MarketType\": {\n                 \"id\": null,\n                 \"market\": null,\n                 \"description\": null,\n                 \"is_visible\": null\n             },\n             \"RequestsHotelRoom\": [\n                 {\n                     \"id\": \"349\",\n                     \"requests_hotel_id\": \"211\",\n                     \"num_of_rooms\": \"1\",\n                     \"room_type_id\": \"-2\",\n                     \"adult\": null,\n                     \"children\": null,\n                     \"meal_plan_id\": \"1\",\n                     \"children_age\": null,\n                     \"notes\": \"Twin Bed\",\n                     \"room_confirm_num\": null,\n                     \"RoomType\": [],\n                     \"ChildInfo\": []\n                 }\n             ],\n             \"RequestsHotelOption\": []\n         }\n\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Hotels"
  },
  {
    "type": "PUT",
    "url": "/items/meals/:requestId/:recordId",
    "title": "Edit a meal",
    "name": "CreateMeal",
    "group": "Items_Meals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>meal unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"RequestsMeal\":{\n         \"restaurant_id\": 6,\n         \"pax\":5,\n         \"city_id\":64,\n         \"extra_meal_type_id\":7,\n         \"price\" :2000,\n         \"currency_id\":1,\n         \"date\":\"2017-10-23\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "description": "<p>edit the meal for a certain request</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "SuccessExample Success-Response:",
          "content": "{\nRequestsMeal\": {\n            \"id\": \"33276\",\n            \"request_id\": \"1000\",\n            \"extra_meal_type_id\": \"7\",\n            \"city_id\": \"64\",\n            \"restaurant_id\": \"6\",\n            \"date\": \"2017-10-23\",\n            \"pax_num\": null,\n            \"notes\": null,\n            \"reservation_status_id\": \"1\",\n            \"created\": \"2018-02-19 12:59:11\",\n            \"pax\": \"4\",\n            \"is_option\": null,\n            \"added_by\": \"1\",\n            \"price\": \"2000.00\",\n            \"currency_id\": \"1\",\n            \"acc_journal_id\": null,\n            \"added_by_guide_id\": null,\n            \"contract_rate\": null,\n            \"contract_currency_id\": null,\n            \"cost_rate\": null,\n            \"cost_currency_id\": null,\n            \"parent_id\": null,\n            \"is_trip\": false,\n            \"option_payment_method\": null\n        },\n        \"Currency\": {\n            \"id\": \"1\",\n            \"currency\": \"Euro\",\n            \"abbrev\": \"EUR\",\n            \"symbol\": \"&#8364;\",\n            \"symbol_direction\": true,\n            \"is_visible\": true\n        },\n        \"Restaurant\": {\n            \"id\": \"6\",\n            \"name\": \"Pharoahs Resturant \",\n            \"address\": \"In the front Of Zoser Pyramids \",\n            \"phone\": null,\n            \"fax\": \"\",\n            \"email\": \"\",\n            \"restaurant_category_id\": \"2\",\n            \"city_id\": \"1\",\n            \"website\": \"\",\n            \"tax_card_num\": null,\n            \"payment_terms\": \"0\",\n            \"is_visible\": true,\n            \"contact_person\": null,\n            \"payment_information\": null\n        },\n        \"ExtraMealType\": {\n            \"id\": \"7\",\n            \"title\": \"Christmas Gala Dinner\",\n            \"duration\": null,\n            \"is_visible\": true\n        },\n        \"City\": {\n            \"id\": \"64\",\n            \"parent_id\": \"0\",\n            \"name\": \"Zürich\",\n            \"branch_id\": \"0\",\n            \"country_id\": \"207\",\n            \"is_visible\": true,\n            \"lat\": null,\n            \"lng\": null\n        }\n    },\n   \"msg\": \"Successfully Updated Extra Meal\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n\"msg\": \"Item not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Meals"
  },
  {
    "type": "POST",
    "url": "/items/meals/:requestId",
    "title": "Create a new Meal",
    "name": "CreateMeal",
    "version": "0.1.0",
    "group": "Items_Meals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"RequestsMeal\":{\n               \"restaurant_id\": 6,\n               \"pax\":5,\n               \"city_id\":64,\n               \"extra_meal_type_id\":7,\n               \"price\" :2000,\n               \"currency_id\":1,\n               \"date\":\"2017-10-23\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n{\nRequestsMeal\": {\n            \"id\": \"33276\",\n            \"request_id\": \"1000\",\n            \"extra_meal_type_id\": \"7\",\n            \"city_id\": \"64\",\n            \"restaurant_id\": \"6\",\n            \"date\": \"2017-10-23\",\n            \"pax_num\": null,\n            \"notes\": null,\n            \"reservation_status_id\": \"1\",\n            \"created\": \"2018-02-19 12:59:11\",\n            \"pax\": \"4\",\n            \"is_option\": null,\n            \"added_by\": \"1\",\n            \"price\": \"2000.00\",\n            \"currency_id\": \"1\",\n            \"acc_journal_id\": null,\n            \"added_by_guide_id\": null,\n            \"contract_rate\": null,\n            \"contract_currency_id\": null,\n            \"cost_rate\": null,\n            \"cost_currency_id\": null,\n            \"parent_id\": null,\n            \"is_trip\": false,\n            \"option_payment_method\": null\n        },\n        \"Currency\": {\n            \"id\": \"1\",\n            \"currency\": \"Euro\",\n            \"abbrev\": \"EUR\",\n            \"symbol\": \"&#8364;\",\n            \"symbol_direction\": true,\n            \"is_visible\": true\n        },\n        \"Restaurant\": {\n            \"id\": \"6\",\n            \"name\": \"Pharoahs Resturant \",\n            \"address\": \"In the front Of Zoser Pyramids \",\n            \"phone\": null,\n            \"fax\": \"\",\n            \"email\": \"\",\n            \"restaurant_category_id\": \"2\",\n            \"city_id\": \"1\",\n            \"website\": \"\",\n            \"tax_card_num\": null,\n            \"payment_terms\": \"0\",\n            \"is_visible\": true,\n            \"contact_person\": null,\n            \"payment_information\": null\n        },\n        \"ExtraMealType\": {\n            \"id\": \"7\",\n            \"title\": \"Christmas Gala Dinner\",\n            \"duration\": null,\n            \"is_visible\": true\n        },\n        \"City\": {\n            \"id\": \"64\",\n            \"parent_id\": \"0\",\n            \"name\": \"Zürich\",\n            \"branch_id\": \"0\",\n            \"country_id\": \"207\",\n            \"is_visible\": true,\n            \"lat\": null,\n            \"lng\": null\n        }\n    },\n   \"msg\": \"Successfully Added New Extra Meal\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Meals"
  },
  {
    "type": "DELETE",
    "url": "/items/meals/:requestId/:recordId",
    "title": "Delete a Meal for certain request",
    "name": "DeleteMeal",
    "group": "Items_Meals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>meal unique id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"msg\": \"Extra Meal data successfully deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": \"Extra Meal data on file couldn't be deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Meals"
  },
  {
    "type": "GET",
    "url": "/items/meals/:request_id",
    "title": "List Lead Meal for certain request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          }
        ]
      }
    },
    "name": "ListLeadMeals",
    "group": "Items_Meals",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"request_meals\": [\n    {\n        \"RequestsMeal\": {\n            \"id\": \"33328\",\n            \"request_id\": \"332187\",\n            \"extra_meal_type_id\": \"7\",\n            \"city_id\": \"64\",\n            \"restaurant_id\": \"6\",\n            \"date\": \"2017-10-23\",\n            \"pax_num\": null,\n            \"notes\": null,\n            \"reservation_status_id\": \"1\",\n            \"created\": \"2017-11-08 10:00:45\",\n            \"pax\": \"5\",\n            \"is_option\": null,\n            \"added_by\": \"1\",\n            \"price\": \"2000.00\",\n            \"currency_id\": \"1\",\n            \"acc_journal_id\": null,\n            \"added_by_guide_id\": null,\n            \"contract_rate\": null,\n            \"contract_currency_id\": null,\n            \"cost_rate\": null,\n            \"cost_currency_id\": null,\n            \"parent_id\": null,\n            \"is_trip\": false,\n            \"option_payment_method\": null\n        },\n        \"Currency\": {\n            \"id\": \"1\",\n            \"currency\": \"Euro\",\n            \"abbrev\": \"EUR\",\n            \"symbol\": \"&#8364;\",\n            \"symbol_direction\": true,\n            \"is_visible\": true\n        },\n   \"Restaurant\": {\n       \"id\": \"6\",\n       \"name\": \"Pharoahs Resturant \",\n       \"address\": \"In the front Of Zoser Pyramids \",\n       \"phone\": null,\n       \"fax\": \"\",\n       \"email\": \"\",\n       \"restaurant_category_id\": \"2\",\n       \"city_id\": \"1\",\n       \"website\": \"\",\n       \"tax_card_num\": null,\n       \"payment_terms\": \"0\",\n       \"is_visible\": true,\n       \"contact_person\": null,\n       \"payment_information\": null\n   },\n   \"ExtraMealType\": {\n       \"id\": \"7\",\n       \"title\": \"Christmas Gala Dinner\",\n       \"duration\": null,\n       \"is_visible\": true\n   },\n   \"City\": {\n       \"id\": \"64\",\n       \"parent_id\": \"0\",\n       \"name\": \"Zürich\",\n       \"branch_id\": \"0\",\n       \"country_id\": \"207\",\n       \"is_visible\": true,\n       \"lat\": null,\n       \"lng\": null\n         }\n      },\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"msg\": \"Request not found.\",\n  \"errors\": {\n     \"msg\": \"Invalid Lead ID provided.\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Meals"
  },
  {
    "type": "GET",
    "url": "/items/meals-types",
    "title": "List Meals Types",
    "name": "ListMealsTypes",
    "group": "Items_Meals",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"MealsTypes\": {\n    \"1\": \"Lunch\",\n    \"2\": \"Cruise Lunch\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Meals"
  },
  {
    "type": "GET",
    "url": "/items/meals/:request_id/:id",
    "title": "View Request Meal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>meal unique id</p>"
          }
        ]
      }
    },
    "name": "ViewMeal",
    "group": "Items_Meals",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n\"RequestsMeal\": {\n           \"id\": \"33328\",\n           \"request_id\": \"332187\",\n           \"extra_meal_type_id\": \"7\",\n           \"city_id\": \"64\",\n           \"restaurant_id\": \"6\",\n           \"date\": \"2017-10-23\",\n           \"pax_num\": null,\n           \"notes\": null,\n           \"reservation_status_id\": \"1\",\n           \"created\": \"2017-11-08 10:00:45\",\n           \"pax\": \"5\",\n           \"is_option\": null,\n           \"added_by\": \"1\",\n           \"price\": \"2000.00\",\n           \"currency_id\": \"1\",\n           \"acc_journal_id\": null,\n           \"added_by_guide_id\": null,\n           \"contract_rate\": null,\n           \"contract_currency_id\": null,\n           \"cost_rate\": null,\n           \"cost_currency_id\": null,\n           \"parent_id\": null,\n           \"is_trip\": false,\n           \"option_payment_method\": null\n       },\n       \"Currency\": {\n           \"id\": \"1\",\n           \"currency\": \"Euro\",\n           \"abbrev\": \"EUR\",\n           \"symbol\": \"&#8364;\",\n           \"symbol_direction\": true,\n           \"is_visible\": true\n       },\n  \"Restaurant\": {\n      \"id\": \"6\",\n      \"name\": \"Pharoahs Resturant \",\n      \"address\": \"In the front Of Zoser Pyramids \",\n      \"phone\": null,\n      \"fax\": \"\",\n      \"email\": \"\",\n      \"restaurant_category_id\": \"2\",\n      \"city_id\": \"1\",\n      \"website\": \"\",\n      \"tax_card_num\": null,\n      \"payment_terms\": \"0\",\n      \"is_visible\": true,\n      \"contact_person\": null,\n      \"payment_information\": null\n  },\n  \"ExtraMealType\": {\n      \"id\": \"7\",\n      \"title\": \"Christmas Gala Dinner\",\n      \"duration\": null,\n      \"is_visible\": true\n  },\n  \"City\": {\n      \"id\": \"64\",\n      \"parent_id\": \"0\",\n      \"name\": \"Zürich\",\n      \"branch_id\": \"0\",\n      \"country_id\": \"207\",\n      \"is_visible\": true,\n      \"lat\": null,\n      \"lng\": null\n        }\n     }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"msg\": \"Request not found.\",\n  \"errors\": {\n     \"msg\": \"Invalid Lead ID provided.\"\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Meals"
  },
  {
    "type": "POST",
    "url": "/items/sightseeings/:requestId",
    "title": "Create a New Sightseeing",
    "version": "0.1.0",
    "name": "CreateThingsToDo",
    "group": "Items_ThingsToDo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n      \"num_of_adults\":\"0\",\n      \"request_status_id\":\"1\",\n      \"RequestsThingstodo\":{\n          \"city_id\":\"1\",\n          \"thingstodo_id\":\"388\",\n          \"price\":\"\",\n          \"currency_id\":\"1\",\n          \"option_payment_method\":\"\",\n          \"pax\":\"0\",\n          \"tour_type\":\"group\",\n          \"notes\":\"hello\",\n          \"date\":\"2018-01-10\",\n          \"start_time\":\"\",\n          \"pickup_location\":\"yas\",\n          \"dropoff_location\":\"yasd\",\n          \"is_option\":\"0\",\n          \"guide_language_id\":\"2\",\n          \"contract_rate\":\"\",\n          \"contract_currency_id\":\"\",\n          \"cost_value\":\"\",\n          \"cost_currency_id\":\"\"\n      },\n\n        \"RequestsTodosCategory\": [\n                  {\n                      \"id\": \"131092\",\n                      \"requests_thingstodo_id\": \"165634\",\n                      \"thingstodos_category_id\": \"1\",\n                      \"qty\": \"1\"\n                }\n              ]\n            }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "SuccessExample Success-Response:",
          "content": "    {\n   \"Requests\": {\n       \"RequestsThingstodo\": {\n          \"id\": \"165604\",\n          \"request_id\": \"1\",\n          \"thingstodo_id\": \"388\",\n          \"day\": null,\n          \"start_time\": null,\n          \"end_time\": null,\n          \"price\": null,\n          \"currency_id\": \"1\",\n          \"notes\": \"hello\",\n          \"guide_id\": null,\n          \"leader_id\": null,\n          \"date\": \"2018-01-10\",\n          \"pax\": \"0\",\n          \"is_option\": \"0\",\n          \"added_by\": \"1\",\n          \"cost_currency_id\": null,\n          \"cost_value\": null,\n          \"acc_journal_id\": null,\n          \"created\": \"2018-02-21 11:53:40\",\n          \"added_by_guide_id\": null,\n          \"contract_rate\": null,\n          \"contract_currency_id\": null,\n          \"parent_id\": null,\n          \"is_trip\": false,\n          \"tour_type\": \"group\",\n          \"external_agency_id\": null,\n          \"guide_language_id\": \"2\",\n          \"reservation_status_id\": \"1\",\n          \"pickup_location\": \"yas\",\n          \"dropoff_location\": \"yasd\",\n          \"option_payment_method\": \"\"\n     },\n     \"RequestsTodosCategory\": [\n         {\n             \"id\": \"108102\",\n             \"requests_thingstodo_id\": \"165604\",\n             \"thingstodos_category_id\": \"0\",\n             \"qty\": \"1\"\n         }\n     ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_ThingsToDo"
  },
  {
    "type": "DELETE",
    "url": "/items/sightseeings/:requestId/:Id",
    "title": "view an existing Sightseeing",
    "version": "0.1.0",
    "name": "DeleteThingsToDoItem",
    "group": "Items_ThingsToDo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>sightseeing Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "\n {\n    \"RequestsThingstodo\": {\n        \"id\": \"306\",\n        \"request_id\": \"4572\",\n        \"thingstodo_id\": \"3\",\n        \"day\": \"7\",\n        \"start_time\": null,\n        \"end_time\": null,\n        \"price\": null,\n        \"currency_id\": null,\n        \"notes\": null,\n        \"guide_id\": null,\n        \"leader_id\": null,\n        \"date\": \"2010-02-20\",\n        \"pax\": null,\n        \"is_option\": null,\n        \"added_by\": \"51\",\n        \"cost_currency_id\": null,\n        \"cost_value\": null,\n        \"acc_journal_id\": null,\n        \"created\": null,\n        \"added_by_guide_id\": null,\n        \"contract_rate\": null,\n        \"contract_currency_id\": null,\n        \"parent_id\": null,\n        \"is_trip\": false,\n        \"tour_type\": null,\n        \"external_agency_id\": null,\n        \"guide_language_id\": null,\n        \"reservation_status_id\": \"1\",\n        \"pickup_location\": null,\n        \"dropoff_location\": null,\n        \"option_payment_method\": null\n    },\n    \"AddedBy\": {\n        \"name\": \"Amna Wasly\"\n    },\n    \"Thingstodo\": {\n        \"name\": \"Salah El Din / Mohamed Ali Citadel\"\n    },\n    \"Currency\": {\n        \"abbrev\": null\n    },\n    \"RequestsTodosCategory\": [\n        {\n            \"id\": \"1\",\n            \"requests_thingstodo_id\": \"306\",\n            \"thingstodos_category_id\": null,\n            \"qty\": \"1\"\n        }\n    ],\n    \"msg\": \"Data found successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"msg\": \"Data not found\",\n \"errors\": [\n     \"Id not found.\"\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_ThingsToDo"
  },
  {
    "type": "DELETE",
    "url": "/items/sightseeings/:requestId/:Id",
    "title": "Delete an existing Sightseeing",
    "version": "0.1.0",
    "name": "DeleteThingsToDoItem",
    "group": "Items_ThingsToDo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>sightseeing Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n  \"msg\": \"element on file was successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Lead ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_ThingsToDo"
  },
  {
    "type": "PUT",
    "url": "/items/sightseeings/:requestId/:Id",
    "title": "Edit an existing Sightseeing",
    "version": "0.1.0",
    "name": "EditThingsToDo",
    "group": "Items_ThingsToDo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>sightseeing Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\n        \"num_of_adults\":\"0\",\n        \"request_status_id\":\"1\",\n        \"RequestsThingstodo\":{\n            \"city_id\":\"1\",\n            \"thingstodo_id\":\"388\",\n            \"price\":\"\",\n            \"currency_id\":\"1\",\n            \"option_payment_method\":\"\",\n            \"pax\":\"0\",\n            \"tour_type\":\"group\",\n            \"notes\":\"heyyy\",\n            \"date\":\"2018-01-10\",\n            \"start_time\":\"\",\n            \"pickup_location\":\"yas\",\n            \"dropoff_location\":\"yasd\",\n            \"is_option\":\"0\",\n            \"guide_language_id\":\"2\",\n            \"contract_rate\":\"\",\n            \"contract_currency_id\":\"\",\n            \"cost_value\":\"\",\n            \"cost_currency_id\":\"\"\n        },\n\n          \"RequestsTodosCategory\": [\n                    {\n                        \"id\": \"131092\",\n                        \"requests_thingstodo_id\": \"165634\",\n                        \"thingstodos_category_id\": \"1\",\n                        \"qty\": \"1\"\n                  }\n                ]\n              }",
          "type": "json"
        },
        {
          "title": "SuccessExample Success-Response:",
          "content": "\n{\n   \"msg\": \"Successfully updated.\",\n   \"Requests\": {\n       \"RequestsThingstodo\": {\n           \"id\": \"165604\",\n           \"request_id\": \"1\",\n           \"thingstodo_id\": \"388\",\n           \"day\": null,\n           \"start_time\": null,\n           \"end_time\": null,\n           \"price\": null,\n           \"currency_id\": \"1\",\n           \"notes\": \"hey\",\n           \"guide_id\": null,\n           \"leader_id\": null,\n           \"date\": \"2018-01-10\",\n           \"pax\": \"0\",\n           \"is_option\": \"0\",\n           \"added_by\": \"1\",\n           \"cost_currency_id\": null,\n           \"cost_value\": null,\n           \"acc_journal_id\": null,\n           \"created\": \"2018-02-21 11:53:40\",\n           \"added_by_guide_id\": null,\n           \"contract_rate\": null,\n           \"contract_currency_id\": null,\n           \"parent_id\": null,\n           \"is_trip\": false,\n           \"tour_type\": \"group\",\n           \"external_agency_id\": null,\n           \"guide_language_id\": \"2\",\n           \"reservation_status_id\": \"1\",\n           \"pickup_location\": \"yas\",\n           \"dropoff_location\": \"yasd\",\n           \"option_payment_method\": \"\"\n       },\n       \"RequestsTodosCategory\": [\n           {\n               \"id\": \"108103\",\n               \"requests_thingstodo_id\": \"165604\",\n               \"thingstodos_category_id\": \"0\",\n               \"qty\": \"1\"\n           }\n       ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"msg\": \"SightSeeing not successfully updated\",\n  \"errors\": {\n      \"thingstodo_id\": [\n          \"The requested ThingsToDo name is required\",\n          \"The requested ThingsToDo name is required\"\n      ],\n      \"tour_type\": [\n          \"The requested ThingsToDo tour type is required\",\n          \"The requested ThingsToDo tour type is required\"\n      ],\n      \"date\": [\n          \"The date of Sightseeing Item is required\",\n          \"The date of Sightseeing Item is required\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_ThingsToDo"
  },
  {
    "type": "GET",
    "url": "/items/sightseeings/:requestId",
    "title": "List All an existing Sightseeings",
    "version": "0.1.0",
    "name": "ListAllThingsToDo",
    "group": "Items_ThingsToDo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "requestId",
            "description": "<p>lead Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "HTTP/1.1 200 OK\n   {\n\"msg\": \"Success\",\n\"ThingstodoCounts\": 11,\n\"RequestsThingstodos\": [\n    {\n        \"RequestsThingstodo\": {\n            \"id\": \"30471\",\n            \"request_id\": \"1\",\n            \"thingstodo_id\": \"82\",\n            \"day\": null,\n            \"start_time\": \"18:00:00\",\n            \"end_time\": \"19:30:00\",\n            \"price\": \"150.00\",\n            \"currency_id\": \"1\",\n            \"notes\": null,\n            \"guide_id\": null,\n            \"leader_id\": null,\n            \"date\": null,\n            \"pax\": null,\n            \"is_option\": \"1\",\n            \"added_by\": \"342\",\n            \"cost_currency_id\": null,\n            \"cost_value\": null,\n            \"acc_journal_id\": null,\n            \"created\": \"2012-02-16 18:02:35\",\n            \"added_by_guide_id\": null,\n            \"contract_rate\": null,\n            \"contract_currency_id\": null,\n            \"parent_id\": null,\n            \"is_trip\": false,\n            \"tour_type\": null,\n            \"external_agency_id\": null,\n            \"guide_language_id\": null,\n            \"reservation_status_id\": \"1\",\n            \"pickup_location\": null,\n            \"dropoff_location\": null,\n            \"option_payment_method\": null\n        },\n        \"AddedBy\": {\n            \"name\": \"Xxxxx - Mohamed Lotfy - Xxxxxxx\"\n        },\n        \"Thingstodo\": {\n            \"name\": \"Cairo Tower\"\n        },\n        \"Currency\": {\n            \"id\": \"1\",\n            \"currency\": \"Euro\",\n            \"abbrev\": \"EUR\",\n            \"symbol\": \"&#8364;\",\n            \"symbol_direction\": true,\n            \"is_visible\": true\n        }\n    },\n    {\n        \"RequestsThingstodo\": {\n            \"id\": \"30472\",\n            \"request_id\": \"1\",\n            \"thingstodo_id\": \"82\",\n            \"day\": null,\n            \"start_time\": \"18:00:00\",\n            \"end_time\": \"19:30:00\",\n            \"price\": \"150.00\",\n            \"currency_id\": \"1\",\n            \"notes\": null,\n            \"guide_id\": null,\n            \"leader_id\": null,\n            \"date\": null,\n            \"pax\": null,\n            \"is_option\": \"1\",\n            \"added_by\": \"342\",\n            \"cost_currency_id\": null,\n            \"cost_value\": null,\n            \"acc_journal_id\": null,\n            \"created\": \"2012-02-16 18:02:13\",\n            \"added_by_guide_id\": null,\n            \"contract_rate\": null,\n            \"contract_currency_id\": null,\n            \"parent_id\": null,\n            \"is_trip\": false,\n            \"tour_type\": null,\n            \"external_agency_id\": null,\n            \"guide_language_id\": null,\n            \"reservation_status_id\": \"1\",\n            \"pickup_location\": null,\n            \"dropoff_location\": null,\n            \"option_payment_method\": null\n        },\n        \"AddedBy\": {\n            \"name\": \"Xxxxx - Mohamed Lotfy - Xxxxxxx\"\n        },\n        \"Thingstodo\": {\n            \"name\": \"Cairo Tower\"\n        },\n        \"Currency\": {\n            \"id\": \"1\",\n            \"currency\": \"Euro\",\n            \"abbrev\": \"EUR\",\n            \"symbol\": \"&#8364;\",\n            \"symbol_direction\": true,\n            \"is_visible\": true\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Lead ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_ThingsToDo"
  },
  {
    "type": "post",
    "url": "/items/trains/:request_id",
    "title": "Add Train Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"RequestsTrainTicket\":{\n    \"train_number\": 645,\n    \"car_number\":5432,\n    \"arrival_city\":7,\n    \"departure_city\":64,\n    \"arrival_time\" :\"2018-4-3 19:00:00\",\n    \"departure_time\" :\"2018-4-10 19:00:00\",\n    \"currency_id\":1,\n    \"train_type_id\":1,\n    \"num_of_singles\":1,\n    \"num_of_doubles\" :2,\n    \"num_of_children\":3,\n    \"notes\":\"train ticket note\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "CreateRequestTrainTicketItem",
    "group": "Items_Train_Tickets",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n         \"RequestsTrainTicket\": {\n           \"id\": \"3706\",\n           \"train_number\": \"645\",\n           \"car_number\": \"5432\",\n           \"seat_number\": null,\n           \"departure_city\": \"64\",\n           \"arrival_city\": \"7\",\n           \"departure_time\": \"2018-04-10 19:00:00\",\n           \"arrival_time\": \"2018-04-03 19:00:00\",\n           \"age_category\": null,\n           \"ticket_price\": null,\n           \"currency_id\": \"1\",\n           \"request_id\": \"90\",\n           \"quantity\": null,\n           \"departure_leader\": null,\n           \"arrival_leader\": null,\n           \"reservation_status_id\": \"1\",\n           \"train_type_id\": \"1\",\n           \"num_of_singles\": \"1\",\n           \"num_of_doubles\": \"2\",\n           \"num_of_children\": \"3\",\n           \"is_option\": null,\n           \"added_by\": \"1\",\n           \"acc_journal_id\": null,\n           \"created\": \"2018-02-21 15:07:55\",\n           \"payment_date\": null,\n           \"added_by_guide_id\": null,\n           \"parent_id\": null,\n           \"is_trip\": false,\n           \"notes\": \"train ticket note\",\n           \"option_payment_method\": null\n         },\n         \"ArrivalCity\": {\n           \"id\": \"7\",\n           \"parent_id\": \"0\",\n           \"name\": \"Taba\",\n           \"branch_id\": \"6\",\n           \"country_id\": \"64\",\n           \"is_visible\": true,\n           \"lat\": null,\n           \"lng\": null\n         },\n      \"DepartureCity\": {\n           \"id\": \"64\",\n           \"parent_id\": \"0\",\n           \"name\": \"Zürich\",\n           \"branch_id\": \"0\",\n           \"country_id\": \"207\",\n           \"is_visible\": true,\n           \"lat\": null,\n           \"lng\": null\n      },\n      \"TrainType\": {\n          \"id\": \"1\",\n          \"title\": \"Sleeper Train\",\n          \"is_visible\": true\n      },\n      \"Currency\": {\n          \"id\": \"1\",\n          \"currency\": \"Euro\",\n          \"abbrev\": \"EUR\",\n          \"symbol\": \"&#8364;\",\n          \"symbol_direction\": true,\n          \"is_visible\": true\n      }\n    },\n   \"msg\": \"Successfully Added New Train Ticket\"\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Train_Tickets"
  },
  {
    "type": "delete",
    "url": "/items/trains/:request_id/:item_id",
    "title": "Delete Train Ticket Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Items unique id</p>"
          }
        ]
      }
    },
    "name": "DeleteTrainTicketItem",
    "group": "Items_Train_Tickets",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"msg\": \"Train Ticket data successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n    \"msg\": \"Train Ticket data couldn't be deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Train_Tickets"
  },
  {
    "type": "get",
    "url": "/items/trains/:request_id",
    "title": "List Lead Train Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "ListLeadTrainTicket",
    "group": "Items_Train_Tickets",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"trains\": [\n    \"RequestsTrainTicket\": {\n         \"id\": \"3703\",\n         \"train_number\": \"645\",\n         \"car_number\": \"5432\",\n         \"seat_number\": null,\n         \"departure_city\": \"64\",\n         \"arrival_city\": \"7\",\n         \"departure_time\": \"2018-04-10 19:00:00\",\n         \"arrival_time\": \"2018-04-03 19:00:00\",\n         \"age_category\": null,\n         \"ticket_price\": null,\n         \"currency_id\": \"1\",\n         \"request_id\": \"90\",\n         \"quantity\": null,\n         \"departure_leader\": null,\n         \"arrival_leader\": null,\n         \"reservation_status_id\": \"1\",\n         \"train_type_id\": \"1\",\n         \"num_of_singles\": \"1\",\n         \"num_of_doubles\": \"2\",\n         \"num_of_children\": \"3\",\n         \"is_option\": null,\n         \"added_by\": \"1\",\n         \"acc_journal_id\": null,\n         \"created\": \"2018-02-21 14:35:54\",\n         \"payment_date\": null,\n         \"added_by_guide_id\": null,\n         \"parent_id\": null,\n         \"is_trip\": false,\n         \"notes\": \"train ticket note\",\n         \"option_payment_method\": null\n      },\n      \"ArrivalCity\": {\n         \"id\": \"7\",\n         \"parent_id\": \"0\",\n         \"name\": \"Taba\",\n         \"branch_id\": \"6\",\n         \"country_id\": \"64\",\n         \"is_visible\": true,\n         \"lat\": null,\n         \"lng\": null\n      },\n      \"DepartureCity\": {\n         \"id\": \"64\",\n         \"parent_id\": \"0\",\n         \"name\": \"Zürich\",\n         \"branch_id\": \"0\",\n         \"country_id\": \"207\",\n         \"is_visible\": true,\n        \"lat\": null,\n         \"lng\": null\n      },\n      \"TrainType\": {\n         \"id\": \"1\",\n         \"title\": \"Sleeper Train\",\n         \"is_visible\": true\n      },\n      \"Currency\": {\n         \"id\": \"1\",\n         \"currency\": \"Euro\",\n         \"abbrev\": \"EUR\",\n         \"symbol\": \"&#8364;\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Train_Tickets"
  },
  {
    "type": "put",
    "url": "/items/trains/:request_id/:item_id",
    "title": "Edit Train Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Items unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"RequestsTrainTicket\":{\n    \"train_number\": 645,\n    \"car_number\":5432,\n    \"arrival_city\":7,\n    \"departure_city\":64,\n    \"arrival_time\" :\"2018-4-3 19:00:00\",\n    \"departure_time\" :\"2018-4-10 19:00:00\",\n    \"currency_id\":1,\n    \"train_type_id\":1,\n    \"num_of_singles\":1,\n    \"num_of_doubles\" :2,\n    \"num_of_children\":3,\n    \"notes\":\"train ticket note\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "UpdateRequestTrainTicketItem",
    "group": "Items_Train_Tickets",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 ok\n{\n         \"RequestsTrainTicket\": {\n           \"id\": \"3706\",\n           \"train_number\": \"645\",\n           \"car_number\": \"5432\",\n           \"seat_number\": null,\n           \"departure_city\": \"64\",\n           \"arrival_city\": \"7\",\n           \"departure_time\": \"2018-04-10 19:00:00\",\n           \"arrival_time\": \"2018-04-03 19:00:00\",\n           \"age_category\": null,\n           \"ticket_price\": null,\n           \"currency_id\": \"1\",\n           \"request_id\": \"90\",\n           \"quantity\": null,\n           \"departure_leader\": null,\n           \"arrival_leader\": null,\n           \"reservation_status_id\": \"1\",\n           \"train_type_id\": \"1\",\n           \"num_of_singles\": \"1\",\n           \"num_of_doubles\": \"2\",\n           \"num_of_children\": \"3\",\n           \"is_option\": null,\n           \"added_by\": \"1\",\n           \"acc_journal_id\": null,\n           \"created\": \"2018-02-21 15:07:55\",\n           \"payment_date\": null,\n           \"added_by_guide_id\": null,\n           \"parent_id\": null,\n           \"is_trip\": false,\n           \"notes\": \"train ticket note\",\n           \"option_payment_method\": null\n         },\n         \"ArrivalCity\": {\n           \"id\": \"7\",\n           \"parent_id\": \"0\",\n           \"name\": \"Taba\",\n           \"branch_id\": \"6\",\n           \"country_id\": \"64\",\n           \"is_visible\": true,\n           \"lat\": null,\n           \"lng\": null\n         },\n      \"DepartureCity\": {\n           \"id\": \"64\",\n           \"parent_id\": \"0\",\n           \"name\": \"Zürich\",\n           \"branch_id\": \"0\",\n           \"country_id\": \"207\",\n           \"is_visible\": true,\n           \"lat\": null,\n           \"lng\": null\n      },\n      \"TrainType\": {\n          \"id\": \"1\",\n          \"title\": \"Sleeper Train\",\n          \"is_visible\": true\n      },\n      \"Currency\": {\n          \"id\": \"1\",\n          \"currency\": \"Euro\",\n          \"abbrev\": \"EUR\",\n          \"symbol\": \"&#8364;\",\n          \"symbol_direction\": true,\n          \"is_visible\": true\n      }\n    },\n   \"msg\": \"Successfully Updated New Train Ticket\"\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Train_Tickets"
  },
  {
    "type": "get",
    "url": "/items/trains/:request_id/:id",
    "title": "View Lead Train Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Leads unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Items unique id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "ViewLeadTrainTicket",
    "group": "Items_Train_Tickets",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"RequestsTrainTicket\": {\n         \"id\": \"3703\",\n         \"train_number\": \"645\",\n         \"car_number\": \"5432\",\n         \"seat_number\": null,\n         \"departure_city\": \"64\",\n         \"arrival_city\": \"7\",\n         \"departure_time\": \"2018-04-10 19:00:00\",\n         \"arrival_time\": \"2018-04-03 19:00:00\",\n         \"age_category\": null,\n         \"ticket_price\": null,\n         \"currency_id\": \"1\",\n         \"request_id\": \"90\",\n         \"quantity\": null,\n         \"departure_leader\": null,\n         \"arrival_leader\": null,\n         \"reservation_status_id\": \"1\",\n         \"train_type_id\": \"1\",\n         \"num_of_singles\": \"1\",\n         \"num_of_doubles\": \"2\",\n         \"num_of_children\": \"3\",\n         \"is_option\": null,\n         \"added_by\": \"1\",\n         \"acc_journal_id\": null,\n         \"created\": \"2018-02-21 14:35:54\",\n         \"payment_date\": null,\n         \"added_by_guide_id\": null,\n         \"parent_id\": null,\n         \"is_trip\": false,\n         \"notes\": \"train ticket note\",\n         \"option_payment_method\": null\n      },\n      \"ArrivalCity\": {\n         \"id\": \"7\",\n         \"parent_id\": \"0\",\n         \"name\": \"Taba\",\n         \"branch_id\": \"6\",\n         \"country_id\": \"64\",\n         \"is_visible\": true,\n         \"lat\": null,\n         \"lng\": null\n      },\n      \"DepartureCity\": {\n         \"id\": \"64\",\n         \"parent_id\": \"0\",\n         \"name\": \"Zürich\",\n         \"branch_id\": \"0\",\n         \"country_id\": \"207\",\n         \"is_visible\": true,\n        \"lat\": null,\n         \"lng\": null\n      },\n      \"TrainType\": {\n         \"id\": \"1\",\n         \"title\": \"Sleeper Train\",\n         \"is_visible\": true\n      },\n      \"Currency\": {\n         \"id\": \"1\",\n         \"currency\": \"Euro\",\n         \"abbrev\": \"EUR\",\n         \"symbol\": \"&#8364;\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n      }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Train_Tickets"
  },
  {
    "type": "post",
    "url": "/items/transfers/:request_id",
    "title": "Create Lead Transfer Routes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request uniqe ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"RequestTransferRoute\" : {\n         \"transfer_route_id\" : 3,\n         \"transfer_date\" : \"2018-04-01\",\n         \"time\" : \"3:00\",\n         \"car_type_id\": 1,\n         \"from_txt\" : \"source\",\n         \"to_txt\" : \"dest\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "name": "CreateRequestTransferRoute",
    "group": "Items_Transfers",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 created\n{\n   \"msg\": \"Successfully Added Transfer Route\",\n   \"RequestTransferRoute\": {\n       \"request_id\": \"90\",\n       \"transfer_route_id\": \"3\",\n       \"car_type_id\": \"1\",\n       \"notes\": null,\n       \"from_txt\": \"source\",\n       \"to_txt\": \"dest\",\n       \"quantity\": null,\n       \"transfer_date\": \"2018-04-01\",\n       \"is_visible\": true,\n       \"id\": \"163198\",\n       \"topology\": null,\n       \"time\": \"03:00:00\",\n       \"from_address_id\": null,\n       \"to_addresss_id\": null,\n       \"distance\": null,\n       \"price\": null,\n       \"currency_id\": null,\n       \"pax\": null,\n       \"added_by\": \"1\",\n       \"is_option\": null,\n       \"acc_journal_id\": null,\n       \"cost_value\": null,\n       \"cost_currency_id\": null,\n       \"created\": \"2018-02-04 14:19:03\",\n       \"added_by_guide_id\": null,\n       \"contract_rate\": null,\n       \"contract_currency_id\": null,\n       \"parent_id\": null,\n       \"is_trip\": false,\n       \"reservation_status_id\": \"1\",\n       \"option_payment_method\": null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Transfers"
  },
  {
    "type": "delete",
    "url": "/items/transfers/:request_id/:id",
    "title": "Delete Lead Transfer Routes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Item unique ID</p>"
          }
        ]
      }
    },
    "name": "DeleteRequestTransferRoute",
    "group": "Items_Transfers",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Element successfully deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n      \"msg\": \"Failed to delete record.\",\n      \"errors\": {\n          \"msg\": \"Invalid ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Transfers"
  },
  {
    "type": "get",
    "url": "/items/transfers/:request_id",
    "title": "List Lead Transfer Routes",
    "version": "0.1.0",
    "name": "ListLeadTransferRoutes",
    "group": "Items_Transfers",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Retrieved Request Transfer Routes\",\n    \"routes\": [\n        {\n            \"RequestTransferRoute\": {\n                \"request_id\": \"23\",\n                \"transfer_route_id\": \"200\",\n                \"car_type_id\": \"1\",\n                \"notes\": \"\",\n                \"from_txt\": \"Train\",\n                \"to_txt\": \"Marhaba Hotel\",\n                \"quantity\": \"1\",\n                \"transfer_date\": \"2010-03-21\",\n                \"is_visible\": true,\n                \"id\": \"429\",\n                \"topology\": null,\n                \"time\": \"00:04:00\",\n                \"from_address_id\": null,\n                \"to_addresss_id\": null,\n                \"distance\": null,\n                \"price\": null,\n                \"currency_id\": \"3\",\n                \"pax\": null,\n                \"added_by\": null,\n                \"is_option\": null,\n                \"acc_journal_id\": null,\n                \"cost_value\": null,\n                \"cost_currency_id\": null,\n                \"created\": null,\n                \"added_by_guide_id\": null,\n                \"contract_rate\": null,\n                \"contract_currency_id\": null,\n                \"parent_id\": null,\n                \"is_trip\": false,\n                \"reservation_status_id\": null,\n                \"option_payment_method\": null\n            },\n            \"TransferRoute\": {\n                \"id\": \"200\",\n                \"title\": \"Aswan train station to hotel\",\n                \"from_txt\": null,\n                \"to_txt\": null,\n                \"city_from_id\": \"4\",\n                \"city_to_id\": \"4\",\n                \"notes\": null,\n                \"is_visible\": true,\n                \"CityFrom\": {\n                    \"name\": \"Aswan\",\n                    \"branch_id\": \"5\"\n                },\n                \"CityTo\": {\n                    \"name\": \"Aswan\",\n                    \"branch_id\": \"5\"\n                }\n            },\n            \"CarType\": {\n                \"id\": \"1\",\n                \"title\": \"Mini-Bus [11]\",\n                \"max_pax\": \"5\",\n                \"is_visible\": true,\n                \"no_of_tires\": \"2\"\n            },\n            \"Currency\": {\n                \"id\": \"3\",\n                \"currency\": \"Egyptian Pounds\",\n                \"abbrev\": \"EGP\",\n                \"symbol\": \"L.E.\",\n                \"symbol_direction\": true,\n                \"is_visible\": true\n            }\n        },\n        {\n            \"RequestTransferRoute\": {\n                \"request_id\": \"23\",\n                \"transfer_route_id\": \"108\",\n                \"car_type_id\": \"1\",\n                \"notes\": \"With visit Kom Ombo & Edfu\",\n                \"from_txt\": \"Marhaba Hotel\",\n                \"to_txt\": \"Luxor\",\n                \"quantity\": \"1\",\n                \"transfer_date\": \"2010-03-21\",\n                \"is_visible\": true,\n                \"id\": \"430\",\n                \"topology\": null,\n                \"time\": \"00:06:00\",\n                \"from_address_id\": null,\n                \"to_addresss_id\": null,\n                \"distance\": null,\n                \"price\": \"380.00\",\n                \"currency_id\": \"3\",\n                \"pax\": null,\n                \"added_by\": null,\n                \"is_option\": null,\n                \"acc_journal_id\": null,\n                \"cost_value\": null,\n                \"cost_currency_id\": null,\n                \"created\": null,\n                \"added_by_guide_id\": null,\n                \"contract_rate\": null,\n                \"contract_currency_id\": null,\n                \"parent_id\": null,\n                \"is_trip\": false,\n                \"reservation_status_id\": null,\n                \"option_payment_method\": null\n            },\n            \"TransferRoute\": {\n                \"id\": \"108\",\n                \"title\": \"Aswan to Luxor\",\n                \"from_txt\": null,\n                \"to_txt\": null,\n                \"city_from_id\": \"4\",\n                \"city_to_id\": \"5\",\n                \"notes\": null,\n                \"is_visible\": true,\n                \"CityFrom\": {\n                    \"name\": \"Aswan\",\n                    \"branch_id\": \"5\"\n                },\n                \"CityTo\": {\n                    \"name\": \"Luxor\",\n                    \"branch_id\": \"5\"\n                }\n            },\n            \"CarType\": {\n                \"id\": \"1\",\n                \"title\": \"Mini-Bus [11]\",\n                \"max_pax\": \"5\",\n                \"is_visible\": true,\n                \"no_of_tires\": \"2\"\n            },\n            \"Currency\": {\n                \"id\": \"3\",\n                \"currency\": \"Egyptian Pounds\",\n                \"abbrev\": \"EGP\",\n                \"symbol\": \"L.E.\",\n                \"symbol_direction\": true,\n                \"is_visible\": true\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Transfers"
  },
  {
    "type": "put",
    "url": "/items/transfers/:request_id/:item_id",
    "title": "Update Lead Transfer Routes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>Item unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"RequestTransferRoute\" : {\n         \"transfer_route_id\" : 3,\n         \"transfer_date\" : \"2018-04-01\",\n         \"time\" : \"3:00\",\n         \"car_type_id\": 1,\n         \"from_txt\" : \"source\",\n         \"to_txt\" : \"dest\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "name": "UpdateRequestTransferRoute",
    "group": "Items_Transfers",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"msg\": \"Successfully Updated Transfer Route\",\n   \"RequestTransferRoute\": {\n       \"request_id\": \"90\",\n       \"transfer_route_id\": \"3\",\n       \"car_type_id\": \"1\",\n       \"notes\": null,\n       \"from_txt\": \"source\",\n       \"to_txt\": \"dest\",\n       \"quantity\": null,\n       \"transfer_date\": \"2018-04-01\",\n       \"is_visible\": true,\n       \"id\": \"163198\",\n       \"topology\": null,\n       \"time\": \"03:00:00\",\n       \"from_address_id\": null,\n       \"to_addresss_id\": null,\n       \"distance\": null,\n       \"price\": null,\n       \"currency_id\": null,\n       \"pax\": null,\n       \"added_by\": \"1\",\n       \"is_option\": null,\n       \"acc_journal_id\": null,\n       \"cost_value\": null,\n       \"cost_currency_id\": null,\n       \"created\": \"2018-02-04 14:19:03\",\n       \"added_by_guide_id\": null,\n       \"contract_rate\": null,\n       \"contract_currency_id\": null,\n       \"parent_id\": null,\n       \"is_trip\": false,\n       \"reservation_status_id\": \"1\",\n       \"option_payment_method\": null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Transfers"
  },
  {
    "type": "get",
    "url": "/items/transfers/:request_id/:id",
    "title": "View Transfer Route",
    "version": "0.1.0",
    "name": "ViewTransferRoute",
    "group": "Items_Transfers",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"RequestTransferRoute\": {\n          \"request_id\": \"23\",\n          \"transfer_route_id\": \"200\",\n          \"car_type_id\": \"1\",\n          \"notes\": \"\",\n          \"from_txt\": \"Train\",\n          \"to_txt\": \"Marhaba Hotel\",\n          \"quantity\": \"1\",\n          \"transfer_date\": \"2010-03-21\",\n          \"is_visible\": true,\n          \"id\": \"429\",\n          \"topology\": null,\n          \"time\": \"00:04:00\",\n          \"from_address_id\": null,\n          \"to_addresss_id\": null,\n          \"distance\": null,\n          \"price\": null,\n          \"currency_id\": \"3\",\n          \"pax\": null,\n          \"added_by\": null,\n          \"is_option\": null,\n          \"acc_journal_id\": null,\n          \"cost_value\": null,\n          \"cost_currency_id\": null,\n          \"created\": null,\n          \"added_by_guide_id\": null,\n          \"contract_rate\": null,\n          \"contract_currency_id\": null,\n          \"parent_id\": null,\n          \"is_trip\": false,\n          \"reservation_status_id\": null,\n          \"option_payment_method\": null\n     },\n     \"TransferRoute\": {\n           \"id\": \"200\",\n           \"title\": \"Aswan train station to hotel\",\n           \"from_txt\": null,\n           \"to_txt\": null,\n           \"city_from_id\": \"4\",\n           \"city_to_id\": \"4\",\n           \"notes\": null,\n           \"is_visible\": true,\n           \"CityFrom\": {\n              \"name\": \"Aswan\",\n              \"branch_id\": \"5\"\n           },\n           \"CityTo\": {\n              \"name\": \"Aswan\",\n              \"branch_id\": \"5\"\n           }\n       },\n       \"CarType\": {\n          \"id\": \"1\",\n          \"title\": \"Mini-Bus [11]\",\n          \"max_pax\": \"5\",\n          \"is_visible\": true,\n          \"no_of_tires\": \"2\"\n        },\n        \"Currency\": {\n           \"id\": \"3\",\n           \"currency\": \"Egyptian Pounds\",\n           \"abbrev\": \"EGP\",\n           \"symbol\": \"L.E.\",\n           \"symbol_direction\": true,\n           \"is_visible\": true\n        }\n     },",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items_Transfers"
  },
  {
    "type": "get",
    "url": "/items/supplements",
    "title": "List Supplements",
    "version": "0.1.0",
    "name": "ListSupplements",
    "group": "Items__Request_supplements_",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"supplements\": {\n     \"1\": \"H.B.\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Items__Request_supplements_"
  },
  {
    "type": "post",
    "url": "/job-titles/main",
    "title": "Create Job Title",
    "name": "CreateJobTitle",
    "group": "JobTitles",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"JobTitle\":{\n      \"id\":\"\",\n      \"title\":\"yasmine5\",\n      \"job_description\":\"test\",\n      \"department_id\" :2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 Created\n  {\n   \"JobTitle\": {\n      \"id\": \"58\",\n      \"title\": \"yasmine5\",\n      \"job_description\": \"test\",\n      \"is_visible\": true\n  },\n  \"Department\": [\n  {\n     \"id\": \"2\",\n     \"name\": \"Information Technology\",\n     \"DepartmentsJobTitle\": {\n        \"id\": \"109\",\n        \"department_id\": \"2\",\n        \"job_title_id\": \"58\"\n     }\n   }\n ],\n \"msg\": \"Job title created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "delete",
    "url": "/job-titles/main/:id",
    "title": "Delete Job Title",
    "name": "DeleteJobTitle",
    "group": "JobTitles",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 ok\n{\n\"msg\": \"Job title deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "post",
    "url": "/job-titles/assignments/:job_title_id/:staff_id",
    "title": "Job Title Assignment",
    "name": "JobTitleAssignment",
    "group": "JobTitles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_title_id",
            "description": "<p>Mandatory jobTitleId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Mandatory staffId</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"JobTitlesStaff\": {\n     \"id\": \"1571\",\n     \"job_title_id\": \"9\",\n     \"staff_id\": \"7\"\n },\n \"msg\": \"Job title successfully assigned\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "delete",
    "url": "/job-titles/de-assignment/:job_title_id/:staff_id",
    "title": "Job Title De-assignment",
    "name": "JobTitleDeAssignment",
    "group": "JobTitles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_title_id",
            "description": "<p>Mandatory jobTitleId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Mandatory StaffId</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"msg\": \"Job title successfully de-assigned\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n  \"msg\": \"record not found.\",\n  \"errors\": {\n      \"msg\": \"Invalid Record ID provided.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "post",
    "url": "/job-titles/assignments/:job_title_id",
    "title": "Job Title Multiple Assignments",
    "name": "JobTitleMultipleAssignments",
    "group": "JobTitles",
    "description": "<p>The Requested Body Ids Related to Users Ids</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_title_id",
            "description": "<p>Mandatory jobTitleId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ids\" : [\n      1,\n      2\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"msg\": \"Successfully assigned this job title to the requestd user/'s\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n {\n  \"errors\": [\n      {\n          \"user_id\": 65,\n          \"msg\": \"This Job title has already assigned to this user!\"\n      }\n  ],\n \"msg\": \"Failed to assign this job title to some requested users\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "get",
    "url": "/job-titles/main",
    "title": "List Job Titles",
    "name": "ListJobTitles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "group": "JobTitles",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 ok\n{\n\"count\": 52,\n\"limit\": 100,\n\"current_page\": 1,\n\"last_page\": 1,\n\"msg\": \"Fetched job titles!\",\n\"job_titles\": [\n    {\n        \"JobTitle\": {\n            \"id\": \"1\",\n            \"title\": \"Chairman\",\n            \"job_description\": \"\",\n             \"is_visible\": true\n        },\n        \"Department\": [\n            {\n                \"id\": \"1\",\n                \"name\": \"Administration\",\n                \"DepartmentsJobTitle\": {\n                    \"id\": \"1\",\n                    \"department_id\": \"1\",\n                    \"job_title_id\": \"1\"\n                }\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "get",
    "url": "/job-titles/staff-list/:job_title_id",
    "title": "List Staff By Job Title",
    "name": "ListStaffByJobTitle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_title_id",
            "description": "<p>Mandatory job_title_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "term",
            "description": "<p>Optional Query Param for Search users</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "my_users_only",
            "description": "<p>Optional flag to list only the users hloding this jobTitle, values: [1,0]</p>"
          }
        ]
      }
    },
    "group": "JobTitles",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"filtered\": true,\n    \"my_users_only\": true,\n    \"users\": [\n        {\n            \"id\": \"286\",\n            \"name\": \"Ahmed Mohamed Ismail\",\n            \"job_title_id\": \"1\",\n            \"previously_added\": true\n        }\n    ],\n    \"msg\": \"fetched users.\",\n    \"limit\": 100,\n    \"count\": 1,\n    \"current_page\": 1,\n    \"last_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "put",
    "url": "/job-titles/main/:id",
    "title": "Update Job Title",
    "name": "UpdateJobTitle",
    "group": "JobTitles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"JobTitle\":{\n      \"title\":\"yasmine5\",\n      \"job_description\":\"test\",\n      \"department_id\" :2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 ok\n  {\n   \"JobTitle\": {\n      \"id\": \"58\",\n      \"title\": \"yasmine5\",\n      \"job_description\": \"test\",\n      \"is_visible\": true\n  },\n  \"Department\": [\n  {\n     \"id\": \"2\",\n     \"name\": \"Information Technology\",\n     \"DepartmentsJobTitle\": {\n        \"id\": \"109\",\n        \"department_id\": \"2\",\n        \"job_title_id\": \"58\"\n     }\n   }\n ],\n \"msg\": \"Job title updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "get",
    "url": "/job-titles/main/:id",
    "title": "View Job Title",
    "name": "ViewJobTitle",
    "group": "JobTitles",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 ok\n  {\n   \"JobTitle\": {\n      \"id\": \"58\",\n      \"title\": \"yasmine5\",\n      \"job_description\": \"test\",\n      \"is_visible\": true\n  },\n  \"Department\": [\n  {\n     \"id\": \"2\",\n     \"name\": \"Information Technology\",\n     \"DepartmentsJobTitle\": {\n        \"id\": \"109\",\n        \"department_id\": \"2\",\n        \"job_title_id\": \"58\"\n     }\n   }\n ],\n \"msg\": \"Fetched job title!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "JobTitles"
  },
  {
    "type": "post",
    "url": "/requests/convert",
    "title": "Automatic Creating Leads",
    "name": "AutomaticCreatingLeads",
    "group": "Lead",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"requests\": [\n        {\n            \"email\":\"yasmine@deemalab.com\",\n            \"subject\":\"hello\",\n            \"text\":\"yas\"\n       },\n       {\n         \"email\":\"yasmine.alaa59@gmail.com\",\n         \"subject\":\"hello2\",\n         \"text\":\"yas2\"\n       }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n \"errors\": [],\n \"msg\": \"All leads successfully created.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n{\n  \"errors\": [\n      {\n          \"msg\": \"Failed to create client\",\n         \"email\": \"yasmie@deemalab.com\",\n         \"errors\": {\n            \"name\": [\n               \"Client name is required\"\n            ]\n          }\n      }\n  ],\n  \"msg\": \"Some leads were not created, check errors array.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Lead"
  },
  {
    "type": "put",
    "url": "/requests/department/:request_id/:department_id",
    "title": "Change lead department",
    "name": "ChangeDep",
    "group": "Lead",
    "version": "0.1.0",
    "description": "<p>Assigns a lead to a certain department, requires Manager authorization.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Request\": {\n        \"id\": \"23\",\n        \"subject\": \"Edited Lead title\",\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\",\n        \"num_of_adults\": \"2\",\n        \"num_of_children\": \"2\",\n        \"all_reminders_used\": false,\n        \"request_status_id\": \"17\",\n        \"source_id\": null,\n        \"sub_source_id\": null,\n        \"client_id\": \"1\",\n        \"staff_id\": \"1\",\n        \"delegated_to\": null,\n        \"ip_address\": null,\n        \"department_id\": \"1\",\n        \"branch_id\": \"1\",\n        \"currency_id\": \"3\",\n        \"request_type_id\": null,\n        \"file_type_id\": null,\n        \"price\": \"4000.00\",\n        \"token\": \"jGfAJn\",\n        \"confirmed\": null,\n        \"cancelled\": null,\n        \"notes\": \"New notes\",\n        \"reservation_notes\": null,\n        \"gr_notes\": null,\n        \"leader_notes\": null,\n        \"read_by_operator\": true,\n        \"assignments_notice\": false,\n        \"reservation_notice\": false,\n        \"missed_items_alert\": null,\n        \"starred\": null,\n        \"alert_flag\": null,\n        \"has_attachments\": null,\n        \"created\": \"2017-10-15 22:42:40\",\n        \"last_message_time\": \"2017-10-15 23:30:52\",\n        \"assignment_time\": \"2017-10-15 23:30:52\",\n        \"replies_count\": \"0\",\n        \"children_ages\": null,\n        \"refunded\": null,\n        \"refund_amount\": null,\n        \"refund_currency_id\": null,\n        \"pol_id\": null,\n        \"pod_id\": null,\n        \"etd\": null,\n        \"eta\": null,\n        \"bl_no\": null,\n        \"carrier_id\": null,\n        \"quotation_ref\": null,\n        \"vessel_id\": null,\n        \"final_dest_id\": null,\n        \"c_clearance_id\": null,\n        \"voyage\": null,\n        \"shipper_agent_id\": null,\n        \"shipper_id\": null,\n        \"commodity_id\": null,\n        \"cut_off_date\": null,\n        \"requester_id\": \"398449\",\n        \"tags\": null,\n        \"is_released\": false,\n        \"is_trip\": false,\n        \"trip_id\": null,\n        \"alt_payment\": null,\n        \"closure_reason_id\": null,\n        \"instant_booking\": false,\n        \"recommended_by\": null,\n        \"site_token\": null,\n        \"marketer_id\": null,\n        \"program_ref_code\": null\n    },\n    \"Staff\": {\n        \"name\": \"Mohab Amr\",\n        \"id\": \"1\",\n        \"work_mail\": \"mohabz@memphistours.com\"\n    },\n    \"DelegatedTo\": {\n        \"name\": null,\n        \"id\": null,\n        \"work_mail\": null\n    },\n    \"Client\": {\n        \"id\": \"1\",\n        \"name\": \"Danilo Bardaro\",\n        \"email\": \"dabardaro@libero.it\",\n        \"phone\": null,\n        \"country_id\": \"107\",\n        \"address\": null,\n        \"passport_no\": null,\n        \"passport_issue_date\": null,\n        \"passport_expiry_date\": null,\n        \"client_group_id\": null,\n        \"payment_terms\": null,\n        \"is_visible\": true,\n        \"tax_card_num\": null,\n        \"city_id\": null,\n        \"dob\": null,\n        \"crm_points\": \"41\",\n        \"is_corporate\": false,\n        \"mobile\": null,\n        \"created_by\": null,\n        \"crm_organization_id\": \"1\"\n    },\n    \"Currency\": {\n        \"id\": \"3\",\n        \"currency\": \"Egyptian Pounds\",\n        \"abbrev\": \"EGP\",\n        \"symbol\": \"L.E.\",\n        \"symbol_direction\": true,\n        \"is_visible\": true\n    },\n    \"RequestPayment\": [],\n    \"msg\": \"Successfully updated lead.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Lead"
  },
  {
    "type": "put",
    "url": "/requests/lead-confirmation/:request_id/:flag",
    "title": "Close Lead",
    "version": "0.1.0",
    "name": "CloseLead",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>Mandatory vALUES [1 for WON , 2 for LOST , 3 for RESET]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Reset lead successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/requests/main",
    "title": "Create Lead",
    "name": "CreateLead",
    "group": "Lead",
    "description": "<p>either send Client.id or the rest of his details, other_clients key is an optional array for other travellers, The requested traveller is considered a child when the email provided is empty &amp;&amp; the birthdate compared to the today date &lt; 18 yrs The requested traveller's is_child flag become false if the email provided is empty &amp;&amp; the birthdate compared to the today date &gt; 18 yrs The requested travelleris considered an adult when the email provided does not empty &amp;&amp; the birthdate compared to the today date &gt; 18 yrs</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Lead-Example:",
          "content": " {\n    \"Client\": {\n        \"name\": \"Mohab 12\",\n        \"email\": \"mohabamro@gmail.com\",\n        \"dob\": \"\",\n        \"crm_organization_id\": 10\n    },\n    \"Request\": {\n        \"notes\": \"no notes yet\",\n        \"department_id\": 1,\n        \"subject\": \"Lead title\",\n        \"num_of_adults\" : \"2\",\n        \"num_of_children\" : \"2\",\n        \"price\":4000,\n        \"currency_id\":3,\n        \"source_id\":4,\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\"\n    },\n    \"other_clients\": [\n       {\n        \"name\": \"test2\",\n        \"email\": \"yasyasmine@deemalab.com\",\n        \"phone\": \"01153771976\",\n        \"is_child\" : true,\n        \"birth_date\": \"1994-01-27\",\n       },\n    \t{\n    \t \"name\": \"show\",\n    \t \"email\": \"\",\n        \"is_child\" : false,\n    \t \"birth_date\": \"1994-01-27\",\n    \t \"phone\": \"01153771976\"\n    \t},\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Contact-Example:",
          "content": " {\n    \"Client\": {\n        \"id\": 306899\n    },\n    \"Request\": {\n        \"notes\": \"no notes yet\",\n        \"department_id\": 1,\n        \"subject\": \"Lead title\",\n        \"num_of_adults\" : \"2\",\n        \"num_of_children\" : \"2\",\n        \"price\":4000,\n        \"currency_id\":3\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\"\n    },\n    \"other_clients\": [\n       {\n        \"name\": \"test2\",\n        \"email\": \"yasyasmine@deemalab.com\",\n        \"phone\": \"01153771976\",\n        \"is_child\" : true,\n        \"birth_date\": \"1994-01-27\",\n       },\n    \t{\n    \t \"name\": \"show\",\n    \t \"email\": \"\",\n    \t \"birth_date\": \"1994-01-27\",\n         \"is_child\" : false,\n    \t \"phone\": \"01153771976\"\n    \t},\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n\n{\n  \"msg\": \"Created new lead\",\n  \"Request\": {\n      \"id\": \"318748\",\n      \"subject\": null,\n      \"arrival_date\": null,\n      \"departure_date\": null,\n      \"num_of_adults\": \"9\",\n      \"num_of_children\": null,\n      \"all_reminders_used\": false,\n      \"request_status_id\": null,\n      \"source_id\": null,\n      \"sub_source_id\": null,\n      \"client_id\": \"306910\",\n      \"staff_id\": \"1\",\n      \"delegated_to\": null,\n      \"ip_address\": null,\n      \"department_id\": null,\n      \"branch_id\": \"1\",\n      \"currency_id\": null,\n      \"request_type_id\": null,\n      \"file_type_id\": null,\n      \"price\": null,\n      \"token\": \"Wq7gvX\",\n      \"confirmed\": null,\n      \"cancelled\": null,\n      \"notes\": null,\n      \"reservation_notes\": null,\n      \"gr_notes\": null,\n      \"leader_notes\": null,\n      \"read_by_operator\": false,\n      \"assignments_notice\": false,\n      \"reservation_notice\": false,\n      \"missed_items_alert\": null,\n      \"starred\": null,\n      \"alert_flag\": null,\n      \"has_attachments\": null,\n      \"created\": \"2018-01-22 14:24:29\",\n      \"last_message_time\": \"2018-01-22 14:24:29\",\n      \"assignment_time\": \"2018-01-22 14:24:29\",\n      \"replies_count\": \"0\",\n      \"children_ages\": null,\n      \"refunded\": null,\n      \"refund_amount\": null,\n      \"refund_currency_id\": null,\n      \"pol_id\": null,\n      \"pod_id\": null,\n      \"etd\": null,\n      \"eta\": null,\n      \"bl_no\": null,\n      \"carrier_id\": null,\n      \"quotation_ref\": null,\n      \"vessel_id\": null,\n      \"final_dest_id\": null,\n      \"c_clearance_id\": null,\n      \"voyage\": null,\n      \"shipper_agent_id\": null,\n      \"shipper_id\": null,\n      \"commodity_id\": null,\n      \"cut_off_date\": null,\n      \"requester_id\": null,\n      \"tags\": null,\n      \"is_released\": false,\n      \"is_trip\": false,\n      \"trip_id\": null,\n      \"alt_payment\": null,\n      \"closure_reason_id\": null,\n      \"instant_booking\": false,\n      \"recommended_by\": null,\n      \"site_token\": null,\n      \"marketer_id\": null,\n      \"program_ref_code\": null\n  },\n  \"Client\": {\n      \"id\": \"306910\",\n      \"name\": \"hozhoh\",\n      \"email\": \"hzoohoh@gmail.com\",\n      \"phone\": null,\n      \"country_id\": null,\n      \"address\": null,\n      \"passport_no\": null,\n      \"passport_issue_date\": null,\n      \"passport_expiry_date\": null,\n      \"client_group_id\": null,\n      \"payment_terms\": null,\n      \"is_visible\": true,\n      \"tax_card_num\": null,\n      \"city_id\": null,\n      \"dob\": null,\n      \"crm_points\": \"0\",\n      \"is_corporate\": false,\n      \"mobile\": null,\n      \"created_by\": \"1\",\n      \"crm_organization_id\": null,\n      \"CrmOrganization\": {\n          \"id\": \"1\",\n          \"name\": \"dlc travel tech test\",\n          \"email\": \"dlc@ddtt.com\",\n          \"phone\": \"87652097\"\n      },\n      \"is_primary\": 1\n   },\n  \"other_clients\": [\n      {\n          \"id\": \"1\",\n          \"name\": \"show\",\n          \"email\": \"\",\n          \"phone\": \"01153771976\",\n          \"birth_date\": \"1994-01-27\",\n          \"request_id\": \"332648\",\n          \"created_by\": \"1\",\n          \"is_child\": false,\n          \"is_visible\": true,\n          \"created\": \"2018-04-05 09:43:12\",\n          \"modified\": \"2018-04-05 09:44:34\",\n          \"is_primary\": 0\n      }\n    ]\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Request",
            "description": "<p>Created request in database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Client",
            "description": "<p>Related client to request.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/api/requests/add",
    "title": "Create Lead",
    "name": "CreateLead",
    "group": "Lead",
    "description": "<p>either send Client.id or the rest of his details</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Lead-Example:",
          "content": " {\n    \"Client\": {\n        \"name\": \"Mohab 12\",\n        \"email\": \"mohabamro@gmail.com\",\n        \"crm_organization_id\": 10\n    },\n    \"Request\": {\n        \"notes\": \"no notes yet\",\n        \"department_id\": 1,\n        \"subject\": \"Lead title\",\n        \"num_of_adults\" : \"2\",\n        \"num_of_children\" : \"2\",\n        \"price\":4000,\n        \"currency_id\":3,\n        \"request_status_id\": 5,\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Contact-Example:",
          "content": " {\n    \"Client\": {\n        \"id\": 306899,\n    },\n    \"Request\": {\n        \"notes\": \"no notes yet\",\n        \"department_id\": 1,\n        \"subject\": \"Lead title\",\n        \"num_of_adults\" : \"2\",\n        \"num_of_children\" : \"2\",\n        \"price\":4000,\n        \"currency_id\":3\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n  \"msg\": \"Created new lead\",\n  \"Request\": {\n      \"id\": \"318748\",\n      \"subject\": null,\n      \"arrival_date\": null,\n      \"departure_date\": null,\n      \"num_of_adults\": \"9\",\n      \"num_of_children\": null,\n      \"all_reminders_used\": false,\n      \"request_status_id\": null,\n      \"source_id\": null,\n      \"sub_source_id\": null,\n      \"client_id\": \"306910\",\n      \"staff_id\": \"1\",\n      \"delegated_to\": null,\n      \"ip_address\": null,\n      \"department_id\": null,\n      \"branch_id\": \"1\",\n      \"currency_id\": null,\n      \"request_type_id\": null,\n      \"file_type_id\": null,\n      \"price\": null,\n      \"token\": \"Wq7gvX\",\n      \"confirmed\": null,\n      \"cancelled\": null,\n      \"notes\": null,\n      \"reservation_notes\": null,\n      \"gr_notes\": null,\n      \"leader_notes\": null,\n      \"read_by_operator\": false,\n      \"assignments_notice\": false,\n      \"reservation_notice\": false,\n      \"missed_items_alert\": null,\n      \"starred\": null,\n      \"alert_flag\": null,\n      \"has_attachments\": null,\n      \"created\": \"2018-01-22 14:24:29\",\n      \"last_message_time\": \"2018-01-22 14:24:29\",\n      \"assignment_time\": \"2018-01-22 14:24:29\",\n      \"replies_count\": \"0\",\n      \"children_ages\": null,\n      \"refunded\": null,\n      \"refund_amount\": null,\n      \"refund_currency_id\": null,\n      \"pol_id\": null,\n      \"pod_id\": null,\n      \"etd\": null,\n      \"eta\": null,\n      \"bl_no\": null,\n      \"carrier_id\": null,\n      \"quotation_ref\": null,\n      \"vessel_id\": null,\n      \"final_dest_id\": null,\n      \"c_clearance_id\": null,\n      \"voyage\": null,\n      \"shipper_agent_id\": null,\n      \"shipper_id\": null,\n      \"commodity_id\": null,\n      \"cut_off_date\": null,\n      \"requester_id\": null,\n      \"tags\": null,\n      \"is_released\": false,\n      \"is_trip\": false,\n      \"trip_id\": null,\n      \"alt_payment\": null,\n      \"closure_reason_id\": null,\n      \"instant_booking\": false,\n      \"recommended_by\": null,\n      \"site_token\": null,\n      \"marketer_id\": null,\n      \"program_ref_code\": null\n  },\n  \"Client\": {\n      \"id\": \"306910\",\n      \"name\": \"hozhoh\",\n      \"email\": \"hzoohoh@gmail.com\",\n      \"phone\": null,\n      \"country_id\": null,\n      \"address\": null,\n      \"passport_no\": null,\n      \"passport_issue_date\": null,\n      \"passport_expiry_date\": null,\n      \"client_group_id\": null,\n      \"payment_terms\": null,\n      \"is_visible\": true,\n      \"tax_card_num\": null,\n      \"city_id\": null,\n      \"dob\": null,\n      \"crm_points\": \"0\",\n      \"is_corporate\": false,\n      \"mobile\": null,\n      \"created_by\": \"1\",\n      \"crm_organization_id\": null\n  }\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Request",
            "description": "<p>Created request in database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Client",
            "description": "<p>Related client to request.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "POST",
    "url": "/requests/files/:RequestId",
    "title": "Delete Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request Id .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "delete",
            "description": "<p>Mandatory should equal 1.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"files\" : [ \"1//National-Motors-Egypt-20247-1476624662.png\" ,\n                \"1//National-Motors-Egypt-20247-14323232.png\" ]\n}",
          "type": "json"
        }
      ]
    },
    "name": "DeleteFiles",
    "group": "Lead",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"msg\": \"All files were deleted successfully.\",\n    \"deleted\": [\n        \"user_files_uploads/Request/1/National-Motors-Egypt-20247-1476624662.png\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": " HTTP/1.1 400\n  {\n    \"msg\": \"Not all files were deleted.\",\n    \"deleted\": [\n        \"user_files_uploads/Request/1/National-Motors-Egypt-20247-1476624662.png\"\n    ],\n    \"errors\": [\n        \"user_files_uploads/Request/1/National-Motors-Egypt-20247-14762222222.png\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Lead"
  },
  {
    "type": "delete",
    "url": "/requests/main/:request_id",
    "title": "Delete Lead",
    "version": "0.1.0",
    "name": "DeleteLead",
    "group": "Lead",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n      \"msg\": \"Deleted lead.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n    \"msg\": \"Couldn't delete lead\",\n    \"errors\": [\n        {\n            \"lead_id\": false,\n            \"msg\": \"This lead has been confirmed before and can't be deleted.\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "PUT",
    "url": "/requests/edit-department/:request_id",
    "title": "Edit Lead department",
    "name": "EditDepartmentId",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>request Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Request\": {\n       \"department_id\": 2\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n{\n   \"Request\": {\n       \"id\": \"211\",\n       \"subject\": \"quote please for 1 week tour\",\n       \"arrival_date\": null,\n       \"departure_date\": null,\n       \"num_of_adults\": null,\n       \"num_of_children\": null,\n       \"all_reminders_used\": false,\n       \"request_status_id\": \"5\",\n       \"source_id\": \"1\",\n       \"sub_source_id\": null,\n       \"client_id\": \"209\",\n       \"staff_id\": \"26\",\n       \"delegated_to\": \"0\",\n       \"ip_address\": \"174.132.245.34\",\n       \"department_id\": \"2\",\n       \"branch_id\": \"1\",\n       \"currency_id\": \"1\",\n       \"request_type_id\": null,\n       \"file_type_id\": null,\n       \"price\": \"1060.00\",\n       \"token\": \"hkd486\",\n       \"confirmed\": false,\n       \"cancelled\": null,\n       \"notes\": null,\n       \"reservation_notes\": null,\n       \"gr_notes\": null,\n       \"leader_notes\": null,\n       \"read_by_operator\": true,\n       \"assignments_notice\": false,\n       \"reservation_notice\": false,\n       \"missed_items_alert\": \"0\",\n       \"starred\": null,\n       \"alert_flag\": false,\n       \"has_attachments\": null,\n       \"created\": \"2009-11-08 11:18:30\",\n       \"last_message_time\": \"2009-11-11 12:07:21\",\n       \"assignment_time\": \"2009-11-08 11:18:30\",\n       \"replies_count\": \"4\",\n       \"children_ages\": null,\n       \"refunded\": null,\n       \"refund_amount\": null,\n       \"refund_currency_id\": null,\n       \"pol_id\": null,\n       \"pod_id\": null,\n       \"etd\": null,\n       \"eta\": null,\n       \"bl_no\": null,\n       \"carrier_id\": null,\n       \"quotation_ref\": null,\n       \"vessel_id\": null,\n       \"final_dest_id\": null,\n       \"c_clearance_id\": null,\n       \"voyage\": null,\n       \"shipper_agent_id\": null,\n       \"shipper_id\": null,\n       \"commodity_id\": null,\n       \"cut_off_date\": null,\n       \"requester_id\": null,\n       \"tags\": null,\n       \"is_released\": false,\n       \"is_trip\": false,\n       \"trip_id\": null,\n       \"alt_payment\": null,\n       \"closure_reason_id\": null,\n       \"recommended_by\": null,\n       \"site_token\": null,\n       \"marketer_id\": null,\n       \"program_ref_code\": null,\n       \"instant_booking\": false\n   },\n   \"Staff\": {\n       \"name\": \"Eman Rashad\",\n       \"id\": \"26\",\n       \"work_mail\": \"pyramids@memphistours.com\"\n   },\n   \"DelegatedTo\": {\n       \"name\": null,\n       \"id\": null,\n       \"work_mail\": null\n   },\n   \"Client\": {\n       \"id\": \"209\",\n       \"name\": \"Tsaparas\",\n       \"email\": \"tsaparas@oxssdssstenet.gr\",\n       \"phone\": null,\n       \"country_id\": null,\n       \"address\": null,\n       \"passport_no\": null,\n       \"passport_issue_date\": null,\n       \"passport_expiry_date\": null,\n       \"client_group_id\": null,\n       \"payment_terms\": null,\n       \"is_visible\": true,\n       \"tax_card_num\": null,\n       \"city_id\": null,\n       \"dob\": null,\n       \"crm_points\": \"0\",\n       \"is_corporate\": false,\n       \"mobile\": null,\n       \"created_by\": null,\n       \"crm_organization_id\": null\n   },\n   \"Currency\": {\n       \"id\": \"1\",\n       \"currency\": \"Euro\",\n       \"abbrev\": \"EUR\",\n       \"symbol\": \"&#8364;\",\n       \"symbol_direction\": true,\n       \"is_visible\": true\n   },\n   \"RequestPayment\": [\n       {\n           \"id\": \"41\",\n           \"payment_method_id\": \"1\",\n           \"payment_amount\": \"530.00\",\n           \"payment_date\": \"2009-11-11\",\n           \"request_id\": \"211\",\n           \"attachment_file\": null,\n           \"currency_id\": \"1\",\n           \"created\": \"2009-11-11 12:13:52\",\n           \"conversion_rate\": \"1.0000\",\n           \"added_by\": null,\n           \"visa_card_no\": null,\n           \"visa_exp_date\": null,\n           \"approved\": null,\n           \"is_option\": \"0\",\n           \"external_agency_id\": null,\n           \"notes\": null,\n           \"scheduled_payment_id\": null,\n           \"AddedBy\": [],\n           \"PaymentMethod\": {\n               \"id\": \"1\",\n               \"title\": \"Online Payment\",\n               \"is_actual\": true,\n               \"is_visible\": true,\n               \"is_external\": null\n           },\n           \"Currency\": {\n               \"id\": \"1\",\n               \"currency\": \"Euro\",\n               \"abbrev\": \"EUR\",\n               \"symbol\": \"&#8364;\",\n               \"symbol_direction\": true,\n               \"is_visible\": true\n           }\n       }\n   ],\n   \"msg\": \"Successfully updated lead.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Lead"
  },
  {
    "type": "put",
    "url": "/requests/main/:id",
    "title": "Edit Lead",
    "version": "0.1.0",
    "name": "EditLead",
    "group": "Lead",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Request\": {\n        \"notes\": \"New notes\",\n        \"department_id\": 1,\n        \"subject\": \"Edited Lead title\",\n        \"num_of_adults\" : \"2\",\n        \"num_of_children\" : \"2\",\n        \"price\": 4000,\n        \"request_status_id\": 3,\n        \"source_id\": 4,\n        \"currency_id\":3,\n        \"arrival_date\": \"2017-12-19\",\n        \"departure_date\": \"2018-11-20\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n     \"Request\": {\n         \"id\": \"23\",\n         \"subject\": \"Edited Lead title\",\n         \"arrival_date\": \"2017-12-19\",\n         \"departure_date\": \"2018-11-20\",\n         \"num_of_adults\": \"2\",\n         \"num_of_children\": \"2\",\n         \"all_reminders_used\": false,\n         \"request_status_id\": \"8\",\n         \"source_id\": null,\n         \"sub_source_id\": null,\n         \"client_id\": \"306898\",\n         \"staff_id\": \"1\",\n         \"delegated_to\": null,\n         \"ip_address\": null,\n         \"department_id\": \"1\",\n         \"branch_id\": \"1\",\n         \"currency_id\": \"3\",\n         \"request_type_id\": null,\n         \"file_type_id\": null,\n         \"price\": \"4000.00\",\n         \"token\": \"jGfAJn\",\n         \"confirmed\": true,\n         \"cancelled\": null,\n         \"notes\": \"New notes\",\n         \"reservation_notes\": null,\n         \"gr_notes\": null,\n         \"leader_notes\": null,\n         \"read_by_operator\": true,\n         \"assignments_notice\": false,\n         \"reservation_notice\": false,\n         \"missed_items_alert\": null,\n         \"starred\": null,\n         \"alert_flag\": null,\n         \"has_attachments\": null,\n         \"created\": \"2017-10-15 22:42:40\",\n         \"last_message_time\": \"2017-10-15 23:30:52\",\n         \"assignment_time\": \"2017-10-15 23:30:52\",\n         \"replies_count\": \"0\",\n         \"children_ages\": null,\n         \"refunded\": null,\n         \"refund_amount\": null,\n         \"refund_currency_id\": null,\n         \"pol_id\": null,\n         \"pod_id\": null,\n         \"etd\": null,\n         \"eta\": null,\n         \"bl_no\": null,\n         \"carrier_id\": null,\n         \"quotation_ref\": null,\n         \"vessel_id\": null,\n         \"final_dest_id\": null,\n         \"c_clearance_id\": null,\n         \"voyage\": null,\n         \"shipper_agent_id\": null,\n         \"shipper_id\": null,\n         \"commodity_id\": null,\n         \"cut_off_date\": null,\n         \"requester_id\": \"398449\",\n         \"tags\": null,\n         \"is_released\": false,\n         \"is_trip\": false,\n         \"trip_id\": null,\n         \"alt_payment\": null,\n         \"closure_reason_id\": null,\n         \"instant_booking\": false,\n         \"recommended_by\": null,\n         \"site_token\": null,\n         \"marketer_id\": null,\n         \"program_ref_code\": null\n     },\n     \"Staff\": {\n         \"name\": \"Mohab Amr\",\n         \"id\": \"1\",\n         \"work_mail\": \"ayman@memphistours.com\"\n     },\n     \"DelegatedTo\": {\n         \"name\": null,\n         \"id\": null,\n         \"work_mail\": null\n     },\n     \"Client\": {\n         \"id\": \"306898\",\n         \"name\": \"Mohab 343\",\n         \"email\": \"mohabamro@gmail.com\",\n         \"phone\": null,\n         \"country_id\": null,\n         \"address\": null,\n         \"passport_no\": null,\n         \"passport_issue_date\": null,\n         \"passport_expiry_date\": null,\n         \"client_group_id\": null,\n         \"payment_terms\": null,\n         \"is_visible\": true,\n         \"tax_card_num\": null,\n         \"city_id\": null,\n         \"dob\": null,\n         \"crm_points\": \"0\",\n         \"is_corporate\": true,\n         \"mobile\": null,\n         \"created_by\": null,\n         \"crm_organization_id\": null\n     },\n     \"Currency\": {\n         \"id\": \"3\",\n         \"currency\": \"Egyptian Pounds\",\n         \"abbrev\": \"EGP\",\n         \"symbol\": \"L.E.\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n     },\n     \"RequestPayment\": [],\n     \"msg\": \"Successfully updated lead.\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n {\n    \"msg\": \"Failed to update lead, check errors array.\",\n    \"errors\": {\n        \"arrival_date\": [\n            \"The Arrival Date date must be before the Departure date\"\n        ],\n        \"departure_date\": [\n            \"The Departure Date date must be after the Arrival date\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "put",
    "url": "/requests/other-clients/:id",
    "title": "Edit Lead Travellers",
    "version": "0.1.0",
    "name": "EditLeadTravellers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n  {\n  \"other_clients\": [\n      {\n          \"id\" :50,\n          \"name\": \"test2\",\n          \"email\": \"\",\n          \"phone\": \"01153771976\",\n          \"birth_date\": \"1994-01-27\",\n          \"is_child: true\n      },\n      {\n          \"id\": 3,\n          \"name\": \"test\",\n          \"email\": \"yasmine@deemalab.com\",\n          \"birth_date\": \"1994-01-27\",\n          \"phone\": \"01153371976\",\n          \"is_child: false\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "group": "Lead",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n     \"Request\": {\n         \"id\": \"23\",\n         \"subject\": \"Edited Lead title\",\n         \"arrival_date\": \"2017-12-19\",\n         \"departure_date\": \"2018-11-20\",\n         \"num_of_adults\": \"2\",\n         \"num_of_children\": \"2\",\n         \"all_reminders_used\": false,\n         \"request_status_id\": \"8\",\n         \"source_id\": null,\n         \"sub_source_id\": null,\n         \"client_id\": \"306898\",\n         \"staff_id\": \"1\",\n         \"delegated_to\": null,\n         \"ip_address\": null,\n         \"department_id\": \"1\",\n         \"branch_id\": \"1\",\n         \"currency_id\": \"3\",\n         \"request_type_id\": null,\n         \"file_type_id\": null,\n         \"price\": \"4000.00\",\n         \"token\": \"jGfAJn\",\n         \"confirmed\": true,\n         \"cancelled\": null,\n         \"notes\": \"New notes\",\n         \"reservation_notes\": null,\n         \"gr_notes\": null,\n         \"leader_notes\": null,\n         \"read_by_operator\": true,\n         \"assignments_notice\": false,\n         \"reservation_notice\": false,\n         \"missed_items_alert\": null,\n         \"starred\": null,\n         \"alert_flag\": null,\n         \"has_attachments\": null,\n         \"created\": \"2017-10-15 22:42:40\",\n         \"last_message_time\": \"2017-10-15 23:30:52\",\n         \"assignment_time\": \"2017-10-15 23:30:52\",\n         \"replies_count\": \"0\",\n         \"children_ages\": null,\n         \"refunded\": null,\n         \"refund_amount\": null,\n         \"refund_currency_id\": null,\n         \"pol_id\": null,\n         \"pod_id\": null,\n         \"etd\": null,\n         \"eta\": null,\n         \"bl_no\": null,\n         \"carrier_id\": null,\n         \"quotation_ref\": null,\n         \"vessel_id\": null,\n         \"final_dest_id\": null,\n         \"c_clearance_id\": null,\n         \"voyage\": null,\n         \"shipper_agent_id\": null,\n         \"shipper_id\": null,\n         \"commodity_id\": null,\n         \"cut_off_date\": null,\n         \"requester_id\": \"398449\",\n         \"tags\": null,\n         \"is_released\": false,\n         \"is_trip\": false,\n         \"trip_id\": null,\n         \"alt_payment\": null,\n         \"closure_reason_id\": null,\n         \"instant_booking\": false,\n         \"recommended_by\": null,\n         \"site_token\": null,\n         \"marketer_id\": null,\n         \"program_ref_code\": null\n     },\n     \"Staff\": {\n         \"name\": \"Mohab Amr\",\n         \"id\": \"1\",\n         \"work_mail\": \"ayman@memphistours.com\"\n     },\n     \"DelegatedTo\": {\n         \"name\": null,\n         \"id\": null,\n         \"work_mail\": null\n     },\n     \"Client\": {\n         \"id\": \"306898\",\n         \"name\": \"Mohab 343\",\n         \"email\": \"mohabamro@gmail.com\",\n         \"phone\": null,\n         \"country_id\": null,\n         \"address\": null,\n         \"passport_no\": null,\n         \"passport_issue_date\": null,\n         \"passport_expiry_date\": null,\n         \"client_group_id\": null,\n         \"payment_terms\": null,\n         \"is_visible\": true,\n         \"tax_card_num\": null,\n         \"city_id\": null,\n         \"dob\": null,\n         \"crm_points\": \"0\",\n         \"is_corporate\": true,\n         \"mobile\": null,\n         \"created_by\": null,\n         \"crm_organization_id\": null\n     },\n     \"Currency\": {\n         \"id\": \"3\",\n         \"currency\": \"Egyptian Pounds\",\n         \"abbrev\": \"EGP\",\n         \"symbol\": \"L.E.\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n     },\n     \"RequestPayment\": [],\n     \"other_clients\": [\n         {\n             \"id\": \"1\",\n             \"name\": \"show\",\n             \"email\": \"\",\n             \"phone\": \"01153771976\",\n             \"birth_date\": \"1994-01-27\",\n             \"request_id\": \"332648\",\n             \"created_by\": \"1\",\n             \"is_child\": false,\n             \"is_visible\": true,\n             \"created\": \"2018-04-05 09:43:12\",\n             \"modified\": \"2018-04-05 09:44:34\",\n             \"is_primary\": 0\n         }\n     ],\n     \"errors\": [\n       {\n        \"email\": \"yas\",\n        \"msg\": \"Failed to create this client!\",\n        \"errors\": {\n            \"name\": [\n                \"You already have this name added\"\n            ],\n            \"email\": [\n                \"Please Supply a Valid E-mail Address\"\n            ]\n        }\n      },\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/requests/filter",
    "title": "Filter Leads",
    "version": "0.1.0",
    "name": "FilterLeads",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Optional Flag to indicate ac as a manger or normal staff [admin, staff].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n    \"filter\" :{\n        \"arrival_date_start\": \"2016-11-02\",\n        \"arrival_date_end\": \"2016-11-02\",\n        \"staff_id\": 1\n\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"requests\": [\n        {\n            \"Request\": {\n                \"subject\": null,\n                \"id\": \"318751\",\n                \"arrival_date\": null,\n                \"departure_date\": null,\n                \"num_of_adults\": null,\n                \"num_of_children\": null,\n                \"confirmed\": null,\n                \"staff_id\": null,\n                \"delegated_to\": null,\n                \"created\": \"2018-02-05 16:44:05\"\n            },\n            \"Staff\": {\n                \"name\": null,\n                \"id\": null\n            },\n            \"Delegate\": {\n                \"name\": null,\n                \"id\": null\n            },\n            \"RequestStatus\": {\n                \"title\": null,\n                \"id\": null\n            },\n            \"Client\": {\n                \"name\": null,\n                \"is_corporate\": null,\n                \"email\": null\n            },\n            \"Currency\": {\n                \"currency\": null,\n                \"abbrev\": null\n            }\n        }\n    ],\n        \"count\": 74,\n        \"limit\": 50,\n        \"last_page\": 2,\n        \"current_page\": 2,\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/main/:id",
    "title": "View Lead",
    "version": "0.1.0",
    "name": "GetLead",
    "group": "Lead",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n   \"Request\": {\n         \"id\": \"23\",\n         \"subject\": \"Edited Lead title\",\n         \"arrival_date\": \"2017-12-19\",\n         \"departure_date\": \"2018-11-20\",\n         \"num_of_adults\": \"2\",\n         \"num_of_children\": \"2\",\n         \"all_reminders_used\": false,\n         \"request_status_id\": \"8\",\n         \"source_id\": null,\n         \"sub_source_id\": null,\n         \"client_id\": \"306898\",\n         \"staff_id\": \"1\",\n         \"delegated_to\": null,\n         \"ip_address\": null,\n         \"department_id\": \"1\",\n         \"branch_id\": \"1\",\n         \"currency_id\": \"3\",\n         \"request_type_id\": null,\n         \"file_type_id\": null,\n         \"price\": \"4000.00\",\n         \"token\": \"jGfAJn\",\n         \"confirmed\": true,\n         \"cancelled\": null,\n         \"notes\": \"New notes\",\n         \"reservation_notes\": null,\n         \"gr_notes\": null,\n         \"leader_notes\": null,\n         \"read_by_operator\": true,\n         \"assignments_notice\": false,\n         \"reservation_notice\": false,\n         \"missed_items_alert\": null,\n         \"starred\": null,\n         \"alert_flag\": null,\n         \"has_attachments\": null,\n         \"created\": \"2017-10-15 22:42:40\",\n         \"last_message_time\": \"2017-10-15 23:30:52\",\n         \"assignment_time\": \"2017-10-15 23:30:52\",\n         \"replies_count\": \"0\",\n         \"children_ages\": null,\n         \"refunded\": null,\n         \"refund_amount\": null,\n         \"refund_currency_id\": null,\n         \"pol_id\": null,\n         \"pod_id\": null,\n         \"etd\": null,\n         \"eta\": null,\n         \"bl_no\": null,\n         \"carrier_id\": null,\n         \"quotation_ref\": null,\n         \"vessel_id\": null,\n         \"final_dest_id\": null,\n         \"c_clearance_id\": null,\n         \"voyage\": null,\n         \"shipper_agent_id\": null,\n         \"shipper_id\": null,\n         \"commodity_id\": null,\n         \"cut_off_date\": null,\n         \"requester_id\": \"398449\",\n         \"tags\": null,\n         \"is_released\": false,\n         \"is_trip\": false,\n         \"trip_id\": null,\n         \"alt_payment\": null,\n         \"closure_reason_id\": null,\n         \"instant_booking\": false,\n         \"recommended_by\": null,\n         \"site_token\": null,\n         \"marketer_id\": null,\n         \"program_ref_code\": null,\n          \"paid\": 24936.8,\n          \"remaining\": -20936.8\n     },\n     \"Staff\": {\n         \"name\": \"Mohab Amr\",\n         \"id\": \"1\",\n         \"work_mail\": \"ayman@memphistours.com\"\n     },\n     \"DelegatedTo\": {\n         \"name\": null,\n         \"id\": null,\n         \"work_mail\": null\n     },\n     \"Client\": {\n         \"id\": \"306898\",\n         \"name\": \"Mohab 343\",\n         \"email\": \"mohabamro@gmail.com\",\n         \"phone\": null,\n         \"country_id\": null,\n         \"address\": null,\n         \"passport_no\": null,\n         \"passport_issue_date\": null,\n         \"passport_expiry_date\": null,\n         \"client_group_id\": null,\n         \"payment_terms\": null,\n         \"is_visible\": true,\n         \"tax_card_num\": null,\n         \"city_id\": null,\n         \"dob\": null,\n         \"crm_points\": \"0\",\n         \"is_corporate\": true,\n         \"mobile\": null,\n         \"created_by\": null,\n         \"crm_organization_id\": 1,\n         \"CrmOrganization\": {\n             \"id\": \"1\",\n             \"name\": \"dlc travel tech test\",\n             \"email\": \"dlc@ddtt.com\",\n             \"phone\": \"87652097\"\n          }\n     },\n     \"Currency\": {\n         \"id\": \"3\",\n         \"currency\": \"Egyptian Pounds\",\n         \"abbrev\": \"EGP\",\n         \"symbol\": \"L.E.\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n     },\n     \"RequestPayment\": [],\n     \"Msg\": \"Successfully fetched request's details.\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/items-prices/:request_id",
    "title": "Lead's Item prices",
    "version": "0.1.0",
    "name": "LeadsItemsPrices",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"total_prices\": {\n     \"EGP\": [\n       175\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/logs/:request_id",
    "title": "Leads Logs",
    "version": "0.1.0",
    "name": "LeadsLogs",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"requests_logs\": [\n      \"RequestsLog\": {\n         \"id\": \"1300688\",\n         \"request_id\": \"90\",\n         \"staff_id\": \"1\",\n         \"note\": \"Added new item of type Hotel + Sightseeing\",\n         \"dept\": null,\n         \"created\": \"2018-01-01 10:51:46\",\n         \"guide_id\": null,\n         \"log_type\": \"create\"\n      },\n      \"Staff\": {\n         \"id\": \"1\",\n         \"name\": \"Yasmine Alaa\",\n         \"username\": \"yasmine\",\n         \"personal_phone\": \"0101508076\",\n         \"branch_id\": \"1\",\n         \"work_mail\": \"\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "travel/requests/notes/:request_id",
    "title": "Leads Notes",
    "version": "0.1.0",
    "name": "LeadsNotes",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"lead_notes\": [\n    {\n    \"RequestNote\": {\n      \"id\": \"1\",\n      \"staff_id\": \"30\",\n      \"notes\": \"Hotel Moveinpick Pyramids\",\n      \"created\": \"2015-02-04 08:27:21\",\n      \"added_by_guide_id\": null\n    },\n    \"Staff\": {\n        \"name\": \"Abdo Younis\"\n     }\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "travel/requests/services/:request_id",
    "title": "Lead's Service Order",
    "version": "0.1.0",
    "name": "LeadsServiceOrder",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"srvOrders\": {\n      \"Client\": {\n         \"id\": \"730\",\n         \"name\": \"Mike Wile\",\n         \"email\": \"mikewile@comcast.net\",\n         \"phone\": null,\n         \"country_id\": null,\n         \"address\": null,\n      },\n     \"Country\": {\n         \"name\": null\n     },\n     \"OtherItemsForms\": null,\n     \"Request\": {\n         \"id\": \"737\",\n         \"subject\": \"Build Trip_Request_Memphis.com\",\n         \"arrival_date\": \"2010-07-05\",\n         \"departure_date\": \"2010-07-06\",\n         \"num_of_adults\": null,\n         \"num_of_children\": null,\n     },\n     \"Staff\": {\n         \"id\": \"30\",\n         \"name\": \"Abdo Younis\",\n         \"is_accessible\": true,\n         \"allow_ips\": null\n     },\n     \"dates\": [\n       {\n         \"date\": \"2010-07-05\",\n         \"time\": \"09:00:00\",\n         \"items\": [\n           {\n             \"name\": \"<i class=\\\"fa fa-picture-o\\\" aria-hidden=\\\"true\\\"></i> Step Pyramid at Saqqara \",\n             \"pax\": \"1 pax only\",\n             \"type\": null,\n             \"pickup\": null,\n             \"dropoff\": null,\n             \"guide\": null,\n             \"note\": null,\n             \"flag\": \"0\",\n             \"serviceType\": \"Sightseeing\"\n         }\n       ]\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/won-lost-requests-list",
    "title": "List closed (won/lost) Leads",
    "version": "0.1.0",
    "name": "ListClosedLeads",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"requests\": [\n        {\n            \"Request\": {\n                \"subject\": \"Edited Lead title\",\n                \"id\": \"23\",\n                \"arrival_date\": \"2017-12-19\",\n                \"departure_date\": \"2018-11-20\",\n                \"num_of_adults\": \"2\",\n                \"num_of_children\": \"2\",\n                \"confirmed\": true,\n                \"staff_id\": \"1\",\n                \"delegated_to\": null,\n                \"created\": \"2017-10-15 22:42:40\"\n            },\n            \"Staff\": {\n                \"name\": \"Mohab Amr\",\n                \"id\": \"1\"\n            },\n            \"Delegate\": {\n                \"name\": null,\n                \"id\": null\n            },\n            \"RequestStatus\": {\n                \"title\": \"Deleted\",\n                \"id\": \"8\"\n            },\n            \"Client\": {\n                \"name\": \"Mohab 343\",\n                \"is_corporate\": true,\n                \"email\": \"mohabamro@gmail.com\"\n            },\n            \"Currency\": {\n                \"currency\": \"Egyptian Pounds\",\n                \"abbrev\": \"EGP\"\n            }\n        }\n    ],\n    \"count\": 22517\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "GET",
    "url": "/requests/stage/:stage_id",
    "title": "List Requests (deals) for Stage",
    "name": "ListDealforAStage",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stage_id",
            "description": "<p>Stage (RequestStatus) ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "term",
            "description": "<p>Optional for term search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional for page number</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n      \"requests\": [\n          {\n              \"Request\": {\n                  \"id\": \"3081\",\n                  \"price\": null,\n                  \"subject\": \"_italiano_Request_Memphis.com\",\n                  \"currency_id\": null,\n                  \"request_status_id\": \"1\",\n                  \"arrival_date\": \"2010-04-01\",\n                  \"departure_date\": \"2010-04-10\",\n                  \"staff_id\": \"48\",\n                  \"delegated_to\": \"0\",\n                  \"confirmed\": null\n              },\n              \"Client\": {\n                  \"name\": \"MAURIZIO RIVA\",\n                  \"id\": \"3073\",\n                  \"CrmOrganization\": []\n              },\n              \"Source\": {\n                  \"source\": \"Italian Site\",\n                  \"id\": \"6\"\n              },\n              \"Staff\": {\n                  \"name\": \"Mohamed Rashad\",\n                  \"id\": \"48\"\n              },\n              \"Department\": {\n                  \"name\": \"Italian\",\n                  \"id\": \"8\"\n              },\n              \"Branch\": {\n                  \"name\": \"Giza {Head Office}\",\n                  \"id\": \"1\"\n              },\n              \"Currency\": {\n                  \"id\": null,\n                  \"currency\": null,\n                  \"abbrev\": null,\n                  \"symbol\": null\n              },\n              \"RequestStatus\": {\n                  \"id\": \"1\"\n              },\n              \"RequestsDestination\": []\n          },\n\n      ],\n      \"Status\": {\n          \"id\": \"1\",\n          \"title\": \"Confirmeddd\",\n          \"order\": \"2\",\n          \"active\": true,\n          \"is_visible\": true,\n          \"count\": 5\n      },\n      \"pagination_limit\": 50,\n      \"pagination_page\": 1,\n      \"count\": 5,\n      \"last_page\": 1\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/files/:request_id",
    "title": "List Lead's Files",
    "version": "0.1.0",
    "name": "ListFiles",
    "group": "Lead",
    "description": "<p>List of urls (files/attachments) attached to this lead.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"files\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/requests/files/:request_id",
    "title": "Delete Lead's Files",
    "version": "0.1.0",
    "name": "ListFiles",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"files\": [\n        \"user_files_uploads\\\\Request\\\\23\\\\14642470_1269141953120551_1685851538751829764_n.jpg\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"All files were deleted successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n      \"msg\": \"Not all files were deleted.\",\n      \"failed\": [\n          \"user_files_uploads/Request/23/user_files_uploads\\\\Request\\\\23\\\\14642470_1269141953120551_1685851538751829764_n.jpg\"\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/second-view-list",
    "title": "List Leads (list)",
    "version": "0.1.0",
    "name": "ListLeadsList",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Optional Flag to indicate ac as a manger or normal staff [admin, staff].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"requests\": [\n        {\n            \"Request\": {\n                \"subject\": \"Edited Lead title\",\n                \"id\": \"23\",\n                \"arrival_date\": \"2017-12-19\",\n                \"departure_date\": \"2018-11-20\",\n                \"num_of_adults\": \"2\",\n                \"num_of_children\": \"2\",\n                \"confirmed\": true,\n                \"staff_id\": \"1\",\n                \"delegated_to\": null,\n                \"created\": \"2017-10-15 22:42:40\"\n            },\n            \"Staff\": {\n                \"name\": \"Mohab Amr\",\n                \"id\": \"1\"\n            },\n            \"Delegate\": {\n                \"name\": null,\n                \"id\": null\n            },\n            \"RequestStatus\": {\n                \"title\": \"Deleted\",\n                \"id\": \"8\"\n            },\n            \"Client\": {\n                \"name\": \"Mohab 343\",\n                \"is_corporate\": true,\n                \"email\": \"mohabamro@gmail.com\"\n            },\n            \"Currency\": {\n                \"currency\": \"Egyptian Pounds\",\n                \"abbrev\": \"EGP\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/main",
    "title": "List Leads (Pipeline)",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Optional flag, possible values: [admin, staff]</p>"
          }
        ]
      }
    },
    "description": "<p>The role query is optional to view all leads (if admin) or my leads only</p>",
    "name": "ListLeadsPipeline",
    "group": "Lead",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"requests\": [\n   {\n    \"Requests\": [\n      {\n       \"Request\": {\n         \"id\": \"332454\",\n         \"price\": null,\n         \"subject\": \"\",\n         \"currency_id\": null,\n         \"request_status_id\": \"6\",\n         \"arrival_date\": \"2018-01-30\",\n         \"departure_date\": \"2018-02-15\",\n         \"staff_id\": \"1\",\n         \"delegated_to\": null,\n         \"confirmed\": null\n        },\n       \"Client\": {\n         \"name\": \"Yasmen Yousry\",\n         \"id\": \"2436\",\n         \"CrmOrganization\": []\n       },\n       \"Source\": {\n         \"source\": \"US Site\",\n         \"id\": \"1\"\n       },\n       \"Staff\": {\n         \"name\": \"Yasmine Alaa\",\n         \"id\": \"1\"\n       },\n       \"Branch\": {\n         \"name\": \"Giza {Head Office}\",\n         \"id\": \"1\"\n       },\n       \"Currency\": {\n         \"id\": null,\n         \"currency\": null,\n         \"abbrev\": null,\n         \"symbol\": null\n       },\n       \"RequestStatus\": {\n         \"id\": \"6\"\n       },\n       \"RequestsDestination\": []\n       ]},\n       \"Status\": {\n        \"id\": \"2\",\n        \"title\": \"Pending Operator's Reply\",\n        \"order\": \"2\",\n        \"active\": true,\n        \"is_visible\": true,\n        \"count\": 4\n       }\n      ],\n      \"pagination_limit\": 20,\n       \"pagination_page\": 1,\n        \"count\": 3",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "requests/other-clients/list/:request_id",
    "title": "List Travellers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": ""
          }
        ]
      }
    },
    "name": "ListTravellers",
    "group": "Lead",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n  \"msg\": \"Fetched travellers!\",\n  \"other_clients\": [\n      {\n          \"id\": \"1\",\n          \"name\": \"show\",\n          \"email\": \"\",\n          \"phone\": \"01153771976\",\n          \"birth_date\": \"1994-01-27\",\n          \"request_id\": \"332648\",\n          \"created_by\": \"1\",\n          \"is_child\": false,\n          \"is_visible\": true,\n          \"created\": \"2018-04-05 09:43:12\",\n          \"modified\": \"2018-04-05 09:44:34\",\n          \"is_primary\": 0\n      }\n    ],\n    \"Request\": {\n      \"id\": \"331449\",\n      \"subject\": \"http://french.memphistours.com/Voyage-En-Egypte/Circuits/voyage-egypte-offre/circuit-egypte-deux-semaines_Reservation_Memphis.com (French)\",\n      \"arrival_date\": \"2017-02-04\",\n      \"departure_date\": \"2017-02-11\",\n      \"num_of_adults\": \"2\",\n      \"num_of_children\": \"2\",\n      \"all_reminders_used\": false,\n      \"request_status_id\": \"4\",\n      \"source_id\": \"87\",\n      \"sub_source_id\": \"39\",\n      \"client_id\": \"318153\",\n      \"staff_id\": \"8\",\n      \"delegated_to\": \"0\",\n      \"ip_address\": null,\n      \"department_id\": \"5\",\n      \"branch_id\": \"1\",\n      \"created\": \"2016-11-25 00:36:06\",\n      \"last_message_time\": \"2016-11-27 11:34:50\",\n      \"assignment_time\": \"2016-11-26 02:03:20\",\n      \"replies_count\": \"4\",\n      \"children_ages\": null,\n      \"refunded\": null,\n      \"refund_amount\": null,\n      \"refund_currency_id\": null,\n      \"program_ref_code\": \"\",\n      \"closure_note\": null,\n      \"clients_info_completed\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Lead"
  },
  {
    "type": "PUT",
    "url": "/requests/migrate/:old_stage_id/:new_stage_id",
    "title": "Migrate Requests from Stage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "old_stage_id",
            "description": "<p>Mandatory Deleted Status  Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "new_stage_id",
            "description": "<p>Mandatory Migrated Status Id</p>"
          }
        ]
      }
    },
    "name": "MigrateRequests",
    "group": "Lead",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n   \"msg\": \"migrated all requests\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"msg\": \"Stage not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Stage ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/search",
    "title": "Search Leads",
    "version": "0.1.0",
    "name": "SearchLeads",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": "<p>Mandatory Search term is as a query param.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "grouped",
            "description": "<p>Optional param = 1 for grouped leads by status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "manager",
            "description": "<p>Optional Flag to indicate ac as a manger or normal staff.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Retrieved leads.\",\n    \"requests\": [\n        {\n            \"Request\": {\n                \"subject\": \"Edited Lead title\",\n                \"id\": \"23\",\n                \"arrival_date\": \"2017-12-19\",\n                \"departure_date\": \"2018-11-20\",\n                \"num_of_adults\": \"2\",\n                \"num_of_children\": \"2\",\n                \"confirmed\": true,\n                \"staff_id\": \"1\",\n                \"delegated_to\": null,\n                \"created\": \"2017-10-15 22:42:40\"\n            },\n            \"Staff\": {\n                \"name\": \"Mohab Amr\",\n                \"id\": \"1\"\n            },\n            \"Delegate\": {\n                \"name\": null,\n                \"id\": null\n            },\n            \"RequestStatus\": {\n                \"title\": \"Deleted\",\n                \"id\": \"8\"\n            },\n            \"Client\": {\n                \"name\": \"Mohab 343\",\n                \"is_corporate\": true,\n                \"email\": \"mohabamro@gmail.com\"\n            },\n            \"Currency\": {\n                \"currency\": \"Egyptian Pounds\",\n                \"abbrev\": \"EGP\"\n            }\n        }\n    ],\n   \"count\": 40,\n   \"current_page\": 1,\n   \"limit\": 50,\n   \"last_page\": 1\n}",
          "type": "json"
        },
        {
          "title": "grouped-leads-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n\"requests\": [\n    {\n        \"Requests\": [\n            {\n              \"Request\": {\n                 \"subject\": \"weee\",\n                 \"id\": \"332521\",\n                 \"arrival_date\": null,\n                 \"departure_date\": null,\n                 \"num_of_adults\": null,\n                 \"num_of_children\": null,\n                 \"confirmed\": null,\n                 \"staff_id\": \"1\",\n                 \"delegated_to\": null,\n                 \"created\": \"2018-04-02 16:18:21\"\n              },\n             \"Staff\": {\n                \"name\": \"yasee\",\n                \"id\": \"1\"\n              },\n             \"Delegate\": {\n                \"name\": null,\n                \"id\": null\n             },\n             \"RequestStatus\": {\n                \"title\": \"New Request\",\n                \"id\": \"6\"\n             },\n            \"Client\": {\n                \"name\": \"yasmine.alaa59\",\n                \"is_corporate\": false,\n                \"email\": \"yasmine.alaa59@gmail.com\"\n            },\n           \"Currency\": {\n                \"currency\": null,\n                \"abbrev\": null\n            }\n      }\n    ],\n    \"Status\": {\n            \"title\": \"Pending Reminder\",\n            \"id\": \"3\"\n        }\n    }\n   ]\n    \"msg\": \"Retrieved leads.\",\n    \"current_page\": 1,\n    \"limit\": 50,\n    \"last_page\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParam",
            "description": "<p>Missing the search term.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestNotFound",
            "description": "<p>The id of the Request was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n      \"errors\": [\n          \"term param is empty or missing.\"\n      ],\n      \"msg\": \"Bad params.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"msg\": \"Request not found.\",\n      \"errors\": {\n          \"msg\": \"Invalid Lead ID provided.\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "POST",
    "url": "/requests/files/:RequestId",
    "title": "Upload New File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request Id .</p>"
          }
        ]
      }
    },
    "name": "UploadFile",
    "group": "Lead",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n    \"msg\": \"All files were uploaded successfully.\",\n    \"result\": {\n        \"success\": true,\n        \"files\": {\n            \"file\": {\n                \"url\": \"user_files_uploads/Request/1/National-Motors-Egypt-20247-1476624662.png\"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": " HTTP/1.1 404\n{\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Request ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Lead"
  },
  {
    "type": "GET",
    "url": "/requests/files/:RequestId",
    "title": "View Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "RequestId",
            "description": "<p>Request Id .</p>"
          }
        ]
      }
    },
    "name": "ViewFiles",
    "group": "Lead",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n     \"files\": [\n         \"user_files_uploads\\\\Request\\\\1\\\\National-Motors-Egypt-20247-1476624662.png\"\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": " HTTP/1.1 404\n{\n    \"msg\": \"Request not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid Lead ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/requests/won-lost-list",
    "title": "Get Won & Lost Leads",
    "version": "0.1.0",
    "name": "WonLostLeads",
    "group": "Lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "manager",
            "description": "<p>Optional Flag to indicate ac as a manger or normal staff.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"won\": [\n    {\n     \"Request\": {\n        \"subject\": \"Build_Your_Trip_Reservation_Memphis.com (DotCom)\",\n        \"id\": \"112055\",\n        \"arrival_date\": \"2014-03-02\",\n        \"departure_date\": \"2014-03-19\",\n        \"num_of_adults\": \"2\",\n        \"num_of_children\": null,\n        \"confirmed\": true,\n        \"staff_id\": \"1\",\n        \"delegated_to\": \"0\",\n        \"created\": \"2012-04-03 00:21:04\"\n    },\n    \"Staff\": {\n        \"name\": \"Yasmine Alaa\",\n        \"id\": \"1\"\n    },\n    \"Delegate\": {\n        \"name\": null,\n        \"id\": null\n    },\n    \"RequestStatus\": {\n        \"title\": \"Confirmed\",\n        \"id\": \"1\"\n    },\n    \"Client\": {\n        \"name\": \"Albert\",\n        \"is_corporate\": false,\n        \"email\": \"barpa@cox.net\"\n    },\n    \"Currency\": {\n        \"currency\": \"United States Dollars\",\n        \"abbrev\": \"USD\"\n    }\n  }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Lead"
  },
  {
    "type": "POST",
    "url": "/lists/main/:id",
    "title": "Add Members",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>List Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"members\": [\n\n  \"1\",\"3\",\"2\"\n\n\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "name": "AddMembers",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"msg\": \"Added all members\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "POST",
    "url": "/lists/main",
    "title": "Create New List",
    "name": "CreateList",
    "group": "ListsController",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"List\": {\n       \"title\": \"new list\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"msg\": \"Created list.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "HTTP/1.1 400\n {\n   \"errors\": {\n       \"title\": [\n           \"Title Can't be empty !\"\n       ]\n   },\n   \"msg\": \"Bad params.\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "DELETE",
    "url": "/lists/main/:id",
    "title": "Delete List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>List Id</p>"
          }
        ]
      }
    },
    "name": "DeleteList",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n {\n   \"msg\": \"Deleted list.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "DELETE",
    "url": "/lists/delete/:id",
    "title": "Delete Members",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>List Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"members\": [\n\n    \"1\",\"2\",\"-2\"\n\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "name": "DeleteMembers",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"msg\": \"Deleted memebers from list.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": " HTTP/1.1 404\n{\n    \"msg\": \"List not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "PUT",
    "url": "/lists/main/:id",
    "title": "Edit List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Madatory List Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"List\": {\n  \t\"title\": \"m7mdeszze\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "EditList",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n  {\n      \"msg\": \"Retrieved list with clients.\",\n      \"list\": {\n          \"ContactsList\": {\n              \"id\": \"6\",\n              \"title\": \"m7mdeszze\"\n          },\n          \"members\": [\n              {\n                  \"id\": \"1\",\n                  \"name\": \"Mohab\",\n                  \"email\": \"mohab@deemalab.com\",\n                  \"phone\": null,\n                  \"dob\": null,\n                  \"mobile\": null,\n                  \"crm_points\": \"41\"\n              }\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "POST",
    "url": "/lists/main/:id/:templateId",
    "title": "Send Email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>List Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateId",
            "description": "<p>template Id</p>"
          }
        ]
      }
    },
    "name": "SendEmail",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n  \"msg\": \"Sent template\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "HTTP/1.1 404\n{\n \"msg\": \"Template not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "GET",
    "url": "/lists/main/:id",
    "title": "View List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>List Id</p>"
          }
        ]
      }
    },
    "name": "ViewList",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n   \"msg\": \"Retrieved list with clients.\",\n   \"list\": {\n       \"id\": \"3\",\n       \"title\": \"armin\",\n       \"members\": [\n           {\n               \"id\": \"2\",\n               \"name\": \"Carmen Sandoval\",\n               \"email\": \"telber_sl@hotmail.com\",\n               \"phone\": null,\n               \"dob\": null,\n               \"mobile\": null,\n               \"crm_points\": \"0\"\n           },\n           {\n               \"id\": \"3\",\n               \"name\": \"\",\n               \"email\": \"vikoulah@gmail.com\",\n               \"phone\": null,\n               \"dob\": null,\n               \"mobile\": null,\n               \"crm_points\": \"0\"\n           }\n       ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": " HTTP/1.1 400\n\n{\n   \"msg\": \"This Id Does not Exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "GET",
    "url": "/lists/main",
    "title": "View All Lists",
    "name": "ViewLists",
    "group": "ListsController",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n   \"msg\": \"All lists\",\n   \"response\": {\n       \"lists\": [\n           {\n               \"id\": \"5\",\n               \"title\": \"wait for you\"\n           },\n           {\n               \"id\": \"4\",\n               \"title\": \"hiii\"\n           },\n           {\n               \"id\": \"3\",\n               \"title\": \"armin\"\n           }\n       ],\n       \"last_page\": 1,\n       \"count\": 3,\n       \"current_page\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "ListsController"
  },
  {
    "type": "put",
    "url": "/mail/config",
    "title": "Configure mail pool settings",
    "name": "ConfigMailFetching",
    "group": "MailFetching",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"IMAP\": {\n\t\t\"password\": \"passwordMohabElgamda\",\n\t\t\"email\": \"mohab@deemalab.com\",\n\t\t\"option\": \"gmail\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"msg\": \"Saved IMAP configuration.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "MailFetching"
  },
  {
    "type": "get",
    "url": "/mail/inbox/fetch",
    "title": "Covert mails to deals",
    "name": "FetchMails",
    "group": "MailFetching",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Finshed fetching and converting emails.\",\n    \"Log\":     \"=========================[Reading Session: 2018-04-07 17:32:53]==========================\n        Loaded Vendors Successfully\\nConecting to the inbox ....\n        Found a total of 2 mails to read ... \n        Finished reading session.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "MailFetching"
  },
  {
    "type": "POST",
    "url": "/templates/mail",
    "title": "Add New MailTemplate",
    "name": "CreateTemplateMail",
    "group": "MailTemplate",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"Template\":\n   {\n    \"title\":\"new email\",\n    \"template_txt\":\"hello its me\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n {\n     \"msg\": \"Created template\",\n     \"Template\": {\n         \"id\": \"1\",\n         \"staff_id\": \"1\",\n         \"title\": \"new email\",\n         \"template_txt\": \"hello its me\",\n         \"is_global\": true,\n         \"is_visible\": true\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n{\n     \"errors\": {\n         \"title\": [\n             \"The template must have a unique title.\"\n         ],\n         \"template_txt\": [\n             \"The template must have a body.\"\n         ]\n     },\n     \"msg\": \"Bad params.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "MailTemplate"
  },
  {
    "type": "DELETE",
    "url": "/templates/mail/:id",
    "title": "Delete MailTemplate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>template Id</p>"
          }
        ]
      }
    },
    "name": "DeleteTemplateMail",
    "group": "MailTemplate",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"msg\": \"The mail template has been deleted.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"This Mail Template Does not exist\",\n   \"errors\": {\n       \"msg\": \"Invalid  Mail Template ID provided.\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "MailTemplate"
  },
  {
    "type": "PUT",
    "url": "/templates/mail/:id",
    "title": "Edit MailTemplate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>template Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n     \"Template\":\n    {\n     \"title\":\"new email\",\n     \"template_txt\":\"hello\"\n   }\n  }\n\n{",
          "type": "json"
        }
      ]
    },
    "name": "EditTemplateMail",
    "group": "MailTemplate",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 Ok\n    \"msg\": \"Updated template.\",\n    \"Template\": {\n       \"id\": \"1\",\n       \"staff_id\": \"1\",\n       \"title\": \"new email\",\n       \"template_txt\": \"hello\",\n       \"is_global\": true,\n       \"is_visible\": true\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"errors\": {\n       \"template_txt\": [\n           \"The template must have a body.\"\n       ]\n   },\n   \"msg\": \"Bad params.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "MailTemplate"
  },
  {
    "type": "GET",
    "url": "/templates/mail",
    "title": "List MailTemplate",
    "name": "TemplateMailIndex",
    "group": "MailTemplate",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "role",
            "description": "<p>Optional role could be admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "page",
            "description": "<p>Optional (pagination) page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "global",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n     \"msg\": \"Retrieved templates.\",\n     \"templates\": [\n         {\n             \"id\": \"2\",\n             \"staff_id\": \"1\",\n             \"title\": \"new emails\",\n             \"template_txt\": \"hello again\",\n             \"is_global\": true,\n             \"is_visible\": true\n         },\n         {\n             \"id\": \"1\",\n             \"staff_id\": \"1\",\n             \"title\": \"new email\",\n             \"template_txt\": \"hello its me\",\n             \"is_global\": true,\n             \"is_visible\": true\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "MailTemplate"
  },
  {
    "type": "GET",
    "url": "/templates/mail/:id",
    "title": "View MailTemplate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>template Id</p>"
          }
        ]
      }
    },
    "name": "ViewTemplateMail",
    "group": "MailTemplate",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"MailTemplate\": {\n       \"id\": \"1\",\n       \"staff_id\": \"1\",\n       \"title\": \"new email\",\n       \"template_txt\": \"hello its moi\",\n       \"is_global\": true,\n       \"is_visible\": true\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"msg\": \"This Mail Template Does not exist\",\n    \"errors\": {\n        \"msg\": \"Invalid  Mail Template ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "MailTemplate"
  },
  {
    "type": "post",
    "url": "/mailchimp/lists/members/:listID",
    "title": "Add Members (in a list)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "listID",
            "description": "<p>Mandatory mailchimp list ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \t\"members\": [\n        \t1, 2\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "name": "AddMembers",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"new_members\": [\n        {\n            \"id\": \"9eac3c2d359b403870fbf799a017e0cf\",\n            \"email_address\": \"dabardaro@libero.it\",\n            \"unique_email_id\": \"c91473928a\",\n            \"email_type\": \"html\",\n            \"status\": \"subscribed\",\n            \"merge_fields\": {\n                \"FNAME\": \"\",\n                \"LNAME\": \"\"\n            },\n            \"stats\": {\n                \"avg_open_rate\": 0,\n                \"avg_click_rate\": 0\n            },\n            \"ip_signup\": \"\",\n            \"timestamp_signup\": \"\",\n            \"ip_opt\": \"196.142.100.86\",\n            \"timestamp_opt\": \"2018-02-26T15:00:59+00:00\",\n            \"member_rating\": 2,\n            \"last_changed\": \"2018-02-26T15:00:59+00:00\",\n            \"language\": \"\",\n            \"vip\": false,\n            \"email_client\": \"\",\n            \"location\": {\n                \"latitude\": 0,\n                \"longitude\": 0,\n                \"gmtoff\": 0,\n                \"dstoff\": 0,\n                \"country_code\": \"\",\n                \"timezone\": \"\"\n            },\n            \"list_id\": \"2a93163dc9\"\n        }\n    ],\n    \"updated_members\": [],\n    \"errors\": [],\n    \"total_created\": 2,\n    \"total_updated\": 0,\n    \"error_count\": 0,\n    \"http_code\": 200\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "new_members",
            "description": "<p>New members added in mailchimp list.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "post",
    "url": "/mailchimp/campaigns",
    "title": "Create a new Campaign",
    "name": "CreateCampaign",
    "group": "Mailchimp",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Campaign\": {\n    \t\"type\": \"regular\",\n    \t\"recipients\": {\n    \t\t\t\"list_id\": \"f323a94ff3\"\n    \t},\n    \t\"settings\": {\n    \t\t\"title\": \"My camp\",\n    \t\t\"subject_line\": \"override subject\",\n    \t\t\"from_name\": \"Mohab\",\n    \t\t\"reply_to\":\"mohab@gmail.com\",\n    \t\t\"content_type\": \"template\"\n    \t}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    {\n        \"id\": \"3938e3b390\",\n        \"web_id\": 308183,\n        \"type\": \"regular\",\n        \"create_time\": \"2018-02-26T16:30:53+00:00\",\n        \"archive_url\": \"http://eepurl.com/dl6TNX\",\n        \"long_archive_url\": \"https://us16.campaign-archive.com/?u=aff1fcb29e601c822b2c3a310&id=3938e3b390\",\n        \"status\": \"save\",\n        \"emails_sent\": 0,\n        \"send_time\": \"\",\n        \"content_type\": \"template\",\n        \"needs_block_refresh\": false,\n        \"recipients\": {\n            \"list_id\": \"f323a94ff3\",\n            \"list_is_active\": true,\n            \"list_name\": \"unique_deema\",\n            \"segment_text\": \"\",\n            \"recipient_count\": 2\n        },\n        \"delivery_status\": {\n            \"enabled\": false\n        },\n        \"http_code\": 200\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Created",
            "description": "<p>campaign in mailchimp in API.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "post",
    "url": "/mailchimp/lists",
    "title": "Create List",
    "name": "CreateList",
    "group": "Mailchimp",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"List\": {\n        \"name\": \"Ay haga\",\n        \"campaign_defaults\": {\n            \"subject\" : \"ay haha\",\n            \"language\": \"english\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n     \"id\": \"e1e2844760\",\n     \"web_id\": 141719,\n     \"name\": \"Ay haga\",\n     \"contact\": {\n         \"company\": \"Memphis Tours Egypt\",\n         \"address1\": \"24 Mourad Street, Giza Sq., Egypt\",\n         \"address2\": \"\",\n         \"city\": \"Cairo\",\n         \"state\": \"Cairo\",\n         \"zip\": \"11321\",\n         \"country\": \"EG\",\n         \"phone\": \"\"\n     },\n     \"permission_reminder\": \"You're receiving this email because you subscribed to our Company newsletter and offers.\",\n     \"use_archive_bar\": true,\n     \"campaign_defaults\": {\n         \"from_name\": \"Memphis Tours Egypt\",\n         \"from_email\": \"reservations@memphistours.com\",\n         \"subject\": \"ay haha\",\n         \"language\": \"english\"\n     },\n     \"notify_on_subscribe\": \"\",\n     \"notify_on_unsubscribe\": \"\",\n     \"date_created\": \"2018-02-26T13:41:13+00:00\",\n     \"list_rating\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retrieved",
            "description": "<p>list from mailchimp api.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "post",
    "url": "/mailchimp/templates/",
    "title": "Create Template",
    "name": "CreateTemplate",
    "group": "Mailchimp",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"Template\": {\n\t\t\"name\": \"Hdissssi\",\n\t\t\"html\": \"<h1>Hello, World!</h1>\",\n\t\t\"is_global\": false\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 101975,\n    \"type\": \"user\",\n    \"name\": \"Hdissssi\",\n    \"drag_and_drop\": false,\n    \"responsive\": false,\n    \"category\": \"\",\n    \"date_created\": \"2018-03-05T15:51:04+00:00\",\n    \"date_edited\": \"2018-03-05T15:51:05+00:00\",\n    \"created_by\": \"Mohab Amr\",\n    \"edited_by\": \"Mohab Amr\",\n    \"active\": true,\n    \"thumbnail\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "delete",
    "url": "/mailchimp/campaigns/:campaignID",
    "title": "Delete Campaign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "campaignID",
            "description": "<p>Mandatory campaign ID</p>"
          }
        ]
      }
    },
    "name": "DeleteCampaign",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "delete",
    "url": "/mailchimp/lists/:listID",
    "title": "Delete List",
    "name": "DeleteList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "listID",
            "description": "<p>Mandatory mailchimp list ID.</p>"
          }
        ]
      }
    },
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "delete",
    "url": "/mailchimp/templates/:templateId",
    "title": "Delete Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateID",
            "description": "<p>Mandatory template ID</p>"
          }
        ]
      }
    },
    "name": "DeleteTemplate",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/auth-token/:code",
    "title": "Access token",
    "name": "GetAccessToken",
    "group": "Mailchimp",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory mailchimp code.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"Saved access_token\",\n    \"token\": \"fda344735e656f2fd132a1d52bb57d4b\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"msg\": \"Sorry, please try again.\",\n     \"errors\": {\n         \"msg\": \"expired_token\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/auth-url",
    "title": "Auth URL",
    "name": "GetAuthURL",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"auth_url\": \"https://login.mailchimp.com/oauth2/authorize?client_id=490739238401&response_type=code&redirect_uri=http://127.0.0.1:4200/mail-chimp/\",\n    \"token\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/campaigns",
    "title": "List Campaigns",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional (pagination) page number.</p>"
          }
        ]
      }
    },
    "name": "ListCampaigns",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"campaigns\": [\n        {\n            \"id\": \"49c1e5deee\",\n            \"web_id\": 246927,\n            \"type\": \"regular\",\n            \"create_time\": \"2017-12-18T15:57:16+00:00\",\n            \"archive_url\": \"http://eepurl.com/deMWjb\",\n            \"long_archive_url\": \"https://us16.campaign-archive.com/?u=aff1fcb29e601c822b2c3a310&id=49c1e5deee\",\n            \"status\": \"sent\",\n            \"emails_sent\": 3,\n            \"send_time\": \"2017-12-18T18:02:35+00:00\",\n            \"content_type\": \"template\",\n            \"needs_block_refresh\": false,\n            \"recipients\": {\n                \"list_id\": \"f323a94ff3\",\n                \"list_is_active\": true,\n                \"list_name\": \"unique_deema\",\n                \"segment_text\": \"\",\n                \"recipient_count\": 3\n            },\n            \"settings\": {\n                \"subject_line\": \"override subject\",\n                \"title\": \"My camp\",\n                \"from_name\": \"Mohab\",\n                \"reply_to\": \"mohab@gmail.com\",\n                \"use_conversation\": false,\n                \"to_name\": \"\",\n                \"folder_id\": \"\",\n                \"authenticate\": true,\n                \"auto_footer\": false,\n                \"inline_css\": false,\n                \"auto_tweet\": false,\n                \"fb_comments\": true,\n                \"timewarp\": false,\n                \"template_id\": 146,\n                \"drag_and_drop\": true\n            },\n            \"tracking\": {\n                \"opens\": true,\n                \"html_clicks\": true,\n                \"text_clicks\": false,\n                \"goal_tracking\": false,\n                \"ecomm360\": false,\n                \"google_analytics\": \"\",\n                \"clicktale\": \"N\"\n            },\n            \"report_summary\": {\n                \"opens\": 1,\n                \"unique_opens\": 1,\n                \"open_rate\": 0.33333333333333,\n                \"clicks\": 0,\n                \"subscriber_clicks\": 0,\n                \"click_rate\": 0,\n                \"ecommerce\": {\n                    \"total_orders\": 0,\n                    \"total_spent\": 0,\n                    \"total_revenue\": 0\n                }\n            },\n            \"delivery_status\": {\n                \"enabled\": false\n            }\n        }\n    ],\n    \"total_items\": 15\n    \"http_code\": 200\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "campaigns",
            "description": "<p>Retrieved campaigns from mailchimp API.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/lists",
    "title": "List Mailchimp Lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional (pagination) page number.</p>"
          }
        ]
      }
    },
    "name": "ListLists",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"lists\": [\n        {\n            \"id\": \"bbea57317c\",\n            \"web_id\": 129795,\n            \"name\": \"deemaApi\",\n            \"contact\": {\n                \"company\": \"Deemalab\",\n                \"address1\": \"ay address\",\n                \"address2\": \"\",\n                \"city\": \"cai\",\n                \"state\": \"nasr city\",\n                \"zip\": \"123123\",\n                \"country\": \"EG\",\n                \"phone\": \"\"\n            },\n            \"permission_reminder\": \"You're receiving this email because you subscribed to our Company newsletter and offers.\",\n            \"use_archive_bar\": true,\n            \"campaign_defaults\": {\n                \"from_name\": \"Deema\",\n                \"from_email\": \"deema@lab.com\",\n                \"subject\": \"Newsletter\",\n                \"language\": \"English\"\n            },\n            \"notify_on_subscribe\": \"\",\n            \"notify_on_unsubscribe\": \"\",\n            \"date_created\": \"2017-12-18T14:11:30+00:00\",\n            \"list_rating\": 0,\n            \"email_type_option\": false,\n            \"subscribe_url_short\": \"http://eepurl.com/deLSeL\",\n            \"subscribe_url_long\": \"https://deemalab.us16.list-manage.com/subscribe?u=aff1fcb29e601c822b2c3a310&id=bbea57317c\",\n            \"beamer_address\": \"us16-0e7163af05-b2bb6c8f37@inbound.mailchimp.com\",\n            \"visibility\": \"pub\"\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "lists",
            "description": "<p>Retrieved lists from mailchimp api.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/lists/members/:listID",
    "title": "Lists Members (in a list)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "listID",
            "description": "<p>Mandatory mailchimp list ID.</p>"
          }
        ]
      }
    },
    "name": "ListMembers",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n        \"members\": [\n            {\n                \"id\": \"7088499acdcafe849b7e2269823bacbf\",\n                \"email_address\": \"ahmed@deemalab.com\",\n                \"unique_email_id\": \"39d114b3bc\",\n                \"email_type\": \"html\",\n                \"status\": \"subscribed\",\n                \"merge_fields\": {\n                    \"FNAME\": \"\",\n                    \"LNAME\": \"\"\n                },\n                \"stats\": {\n                    \"avg_open_rate\": 0,\n                    \"avg_click_rate\": 0\n                },\n                \"ip_signup\": \"\",\n                \"timestamp_signup\": \"\",\n                \"ip_opt\": \"85.159.209.86\",\n                \"timestamp_opt\": \"2018-01-27T16:09:07+00:00\",\n                \"member_rating\": 2,\n                \"last_changed\": \"2018-01-27T16:09:07+00:00\",\n                \"language\": \"\",\n                \"vip\": false,\n                \"email_client\": \"\",\n                \"location\": {\n                    \"latitude\": 0,\n                    \"longitude\": 0,\n                    \"gmtoff\": 0,\n                    \"dstoff\": 0,\n                    \"country_code\": \"\",\n                    \"timezone\": \"\"\n                }\n            }\n        ],\n        \"list_id\": \"2a93163dc9\",\n        \"total_items\": 9\n    }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "members",
            "description": "<p>Retrieved (list) members from mailchimp API.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/templates",
    "title": "List Templates",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional (pagination) page number.</p>"
          }
        ]
      }
    },
    "name": "ListTemplates",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"templates\": [\n        {\n            \"id\": 1000237,\n            \"type\": \"gallery\",\n            \"name\": \"EventBrite Single Event\",\n            \"drag_and_drop\": false,\n            \"responsive\": false,\n            \"category\": \"Integrations\",\n            \"date_created\": \"2017-03-20T15:25:02+00:00\",\n            \"date_edited\": \"\",\n            \"created_by\": \"\",\n            \"edited_by\": \"\",\n            \"active\": true,\n            \"thumbnail\": \"https://gallery.mailchimp.com/27aac8a65e64c994c4416d6b8/images/1000237.jpg\"\n        }\n    ],\n    \"total_items\": 111\n    \"http_code\": 200\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "templates",
            "description": "<p>Retrieved templates from mailchimp API.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "post",
    "url": "/mailchimp/campaigns/actions/:campaignID/:action",
    "title": "Send (action) Campaign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "campaignID",
            "description": "<p>Mandatory campaign ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Mandatory action [send, cancel..etc]</p>"
          }
        ]
      }
    },
    "name": "SendCampaign",
    "group": "Mailchimp",
    "version": "0.1.0",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n {\n     \"type\": \"http://developer.mailchimp.com/documentation/mailchimp/guides/error-glossary/\",\n     \"title\": \"Bad Request\",\n     \"status\": 400,\n     \"detail\": \"Your Campaign is not ready to send.\",\n     \"instance\": \"1b492e9f-60f7-46a0-be2f-dd5d714bb554\",\n     \"http_code\": 400\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/campaigns/:campaignID",
    "title": "View Campaign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "campaignID",
            "description": "<p>Mandatory campaign ID.</p>"
          }
        ]
      }
    },
    "name": "ViewCampaign",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"49c1e5deee\",\n    \"web_id\": 246927,\n    \"type\": \"regular\",\n    \"create_time\": \"2017-12-18T15:57:16+00:00\",\n    \"archive_url\": \"http://eepurl.com/deMWjb\",\n    \"long_archive_url\": \"https://us16.campaign-archive.com/?u=aff1fcb29e601c822b2c3a310&id=49c1e5deee\",\n    \"status\": \"sent\",\n    \"emails_sent\": 3,\n    \"send_time\": \"2017-12-18T18:02:35+00:00\",\n    \"content_type\": \"template\",\n    \"needs_block_refresh\": false,\n    \"recipients\": {\n        \"list_id\": \"f323a94ff3\",\n        \"list_is_active\": true,\n        \"list_name\": \"unique_deema\",\n        \"segment_text\": \"\",\n        \"recipient_count\": 3\n    },\n    \"delivery_status\": {\n        \"enabled\": false\n    },\n    \"http_code\": 200\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retrieved",
            "description": "<p>campaign from mailchimp API.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/lists/:listID",
    "title": "View List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "listID",
            "description": "<p>Mandatory mailchimp list ID.</p>"
          }
        ]
      }
    },
    "name": "ViewList",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"15ae1e41ce\",\n    \"web_id\": 130043,\n    \"name\": \"deemaApi\",\n    \"contact\": {\n        \"company\": \"Deemalab\",\n        \"address1\": \"ay address\",\n        \"address2\": \"\",\n        \"city\": \"cai\",\n        \"state\": \"nasr city\",\n        \"zip\": \"123123\",\n        \"country\": \"EG\",\n        \"phone\": \"\"\n    },\n    \"permission_reminder\": \"You're receiving this email because you subscribed to our Company newsletter and offers.\",\n    \"use_archive_bar\": true,\n    \"campaign_defaults\": {\n        \"from_name\": \"Deema\",\n        \"from_email\": \"deema@lab.com\",\n        \"subject\": \"Newsletter\",\n        \"language\": \"English\"\n    },\n    \"notify_on_subscribe\": \"\",\n    \"notify_on_unsubscribe\": \"\",\n    \"date_created\": \"2017-12-19T11:12:18+00:00\",\n    \"list_rating\": 0\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retrieved",
            "description": "<p>list from mailchimp api.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "get",
    "url": "/mailchimp/templates/:templateId",
    "title": "View Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "templateID",
            "description": "<p>Mandatory template ID</p>"
          }
        ]
      }
    },
    "name": "ViewTemplate",
    "group": "Mailchimp",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1000237,\n    \"type\": \"gallery\",\n    \"name\": \"EventBrite Single Event\",\n    \"drag_and_drop\": false,\n    \"responsive\": false,\n    \"category\": \"Integrations\",\n    \"date_created\": \"2017-03-20T15:25:02+00:00\",\n    \"date_edited\": \"\",\n    \"created_by\": \"\",\n    \"edited_by\": \"\",\n    \"active\": true,\n    \"thumbnail\": \"https://gallery.mailchimp.com/27aac8a65e64c994c4416d6b8/images/1000237.jpg\",\n    \"http_code\": 200\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retrieved",
            "description": "<p>Template from mailchimp API.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Mailchimp"
  },
  {
    "type": "GET",
    "url": "/market-types/names",
    "title": "List MarketType Names",
    "name": "ListMarketTypeNames",
    "group": "MarketTypes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"MarketTypes\": {\n     \"1\": \"Gulf\",\n     \"2\": \"Middle East\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "MarketTypes"
  },
  {
    "type": "get",
    "url": "/market-types/list",
    "title": "List MarketTypes",
    "name": "ListMarketTypes",
    "group": "MarketTypes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"MarketTypes\": {\n   \"1\": \"Gulf\",\n  \"2\": \"Middle East\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "MarketTypes"
  },
  {
    "type": "POST",
    "url": "/requests/notes/:request_id",
    "title": "Create New Note",
    "name": "CreateNote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory request_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"RequestNote\": {\n         \"notes\": \"Pick up\",\n    }\n }",
          "type": "json"
        }
      ]
    },
    "group": "Notes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n {\n  \"msg\": \"Note successfully added\",\n  \"RequestNote\": {\n      \"id\": \"92377\",\n      \"staff_id\": \"1\",\n      \"request_id\": \"869\",\n      \"notes\": \"Pick up\",\n      \"created\": \"2018-02-27 13:50:25\",\n      \"added_by_guide_id\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"Note has not been added.\",\n    \"errors\": {\n        \"notes\": [\n            \"The Note body is required\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Notes"
  },
  {
    "type": "DELETE",
    "url": "/requests/notes/:request_id",
    "title": "Delete All Lead Notes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory request_id</p>"
          }
        ]
      }
    },
    "group": "Notes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n   {\n   \"msg\": \"All notes were successfully deleted.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n\"error\": \"Notes were not deleted!\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Notes",
    "name": "DeleteRequestsNotesRequest_id"
  },
  {
    "type": "DELETE",
    "url": "/requests/notes/:request_id/:id",
    "title": "Delete Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Note Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory request_id</p>"
          }
        ]
      }
    },
    "group": "Notes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n   {\n   \"msg\": \"note data on file was successfully deleted\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n\"error\": \"note data on file couldn't be deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Notes",
    "name": "DeleteRequestsNotesRequest_idId"
  },
  {
    "type": "PUT",
    "url": "/requests/notes/:request_id/:id",
    "title": "Edit Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Note Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory request_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"RequestNote\": {\n       \"notes\": \"Pick me up\",\n\n   }\n}",
          "type": "json"
        }
      ]
    },
    "name": "EditNote",
    "group": "Notes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n   {\n    \"msg\": \"Note successfully updated\",\n    \"RequestNote\": {\n        \"id\": \"3\",\n        \"staff_id\": \"30\",\n        \"request_id\": \"869\",\n        \"notes\": \"Pick me up\",\n        \"created\": \"2015-02-04 08:27:21\",\n        \"added_by_guide_id\": null\n     }\n   }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n   \"msg\": \"Note Unsuccessfully updated\",\n   \"errors\": {\n      \"notes\": [\n             \"The Note body is required\"\n       ]\n     }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Notes"
  },
  {
    "type": "GET",
    "url": "/requests/notes/:request_id",
    "title": "List Notes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Request Unique ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "group": "Notes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n\"lead_notes\": [\n {\n     \"RequestNote\": {\n         \"id\": \"92378\",\n         \"staff_id\": \"1\",\n         \"request_id\": \"869\",\n         \"notes\": \"Pick me up\",\n         \"created\": \"2018-02-27 13:53:45\",\n         \"added_by_guide_id\": null\n     },\n     \"Staff\": {\n         \"name\": \"Ayman Bedair\"\n     }\n },\n {\n     \"RequestNote\": {\n         \"id\": \"92377\",\n         \"staff_id\": \"1\",\n         \"request_id\": \"869\",\n         \"notes\": \"Pick up\",\n         \"created\": \"2018-02-27 13:50:25\",\n         \"added_by_guide_id\": null\n     },\n     \"Staff\": {\n         \"name\": \"Ayman Bedair\"\n     }\n },\n {\n     \"RequestNote\": {\n         \"id\": \"92372\",\n         \"staff_id\": \"30\",\n         \"request_id\": \"869\",\n         \"notes\": \"Pick uuuup\",\n         \"created\": \"2015-02-04 08:27:21\",\n         \"added_by_guide_id\": null\n     },\n     \"Staff\": {\n         \"name\": \"Abdo Younis\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Notes",
    "name": "GetRequestsNotesRequest_id"
  },
  {
    "type": "POST",
    "url": "/organizations",
    "title": "Create New Organization",
    "version": "0.1.0",
    "name": "CreateOrganization",
    "group": "Organizations",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"CrmOrganization\":\n             {  \"address\": \"nasr city\",\n                \"country\": \"Egypt\",\n                \"email\": \"yas@net.com\",\n                \"name\": \"new test\",\n                \"city_id\":1,\n                \"country_id\":1,\n                \"phone\": \"0113214135\",\n                \"description\" : \"Computer network company\"\n             }\n          }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "\n {\n         \"msg\": \"Organization successfully added\",\n         \"OrganizationDetails\": {\n             \"CrmOrganization\": {\n                 \"id\": \"2\",\n                 \"name\": \"new test\",\n                 \"email\": \"yas@net.com\",\n                 \"phone\": \"0113214135\",\n                 \"mobile\": null,\n                 \"address\": \"vbhj\",\n                 \"description\": \"Computer network company\",\n                 \"city_id\": \"1\",\n                 \"country_id\": \"1\",\n                 \"created_by\": \"1\",\n                 \"is_visible\": true,\n                 \"created\": \"2018-02-22 13:36:39\",\n                 \"modified\": \"2018-02-22 13:36:39\"\n             },\n             \"createdBy\": {\n                 \"id\": \"1\",\n                 \"name\": \"Ayman Bedair\",\n                 \"dob\": \"1987-03-11\",\n                 \"personal_phone\": \"0101508076\",\n                 \"other_phone_numbers\": \"\",\n                 \"work_phone_ext\": \"333 / 777\",\n                 \"work_mail\": \"ayman@memphistours.com\",\n                 \"system_mail\": \"mte@memphistours.com\",\n                 \"personal_mail\": \"aymanrb@gmail.com\",\n                 \"address\": \"A1, New Awkaf Buildings, Hadayek El Koba, Cairo, Egypt\",\n                 \"employment_date\": \"2003-02-01\",\n                 \"last_login\": \"2012-01-05 13:17:21\",\n                 \"created\": \"2009-07-10 19:13:53\",\n                 \"modified\": \"2016-08-16 10:25:17\",\n                 \"username\": \"admin\",\n                 \"password\": \"0e2eb0a1b60e506603b94d486c263787f9c48eb1\",\n                 \"branch_id\": \"1\",\n                 \"active\": true,\n                 \"is_visible\": true,\n                 \"online\": true,\n                 \"signature\": \"\",\n                 \"assigned_requests\": \"0\",\n                 \"manager_id\": \"3\",\n                 \"time_sheet_id\": \"11\",\n                 \"sheet_id\": null,\n                 \"token_active\": \"2012-11-19 14:56:32\",\n                 \"ws_token\": \"If:Gg0%mQ[qdE*<8DT0w.!ms?@XVWwh1\",\n                 \"last_password_changed\": \"2016-08-16 10:25:17\",\n                 \"company_id\": \"1\",\n                 \"force_password_change\": false,\n                 \"push_bullet_token\": \"OmgiDhNIzyWOY8soD3hlRK3hE0SjmNjt\",\n                 \"allow_ips\": null\n             },\n             \"Country\": {\n                 \"name\": \"United States\"\n             },\n             \"City\": {\n                 \"name\": \"Cairo\"\n             },\n             \"Client\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\": \"Organization Unsuccessfully added\",\n   \"errors\": {\n       \"You already have this name added\"\n       ]\n               \"name\": [\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "POST",
    "url": "/organizations/delete-multiple",
    "title": "",
    "version": "0.1.0",
    "name": "DeleteMultipleOrganizations",
    "group": "Organizations",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"organizations\":  [\n       {\"id\": 7},\n       {\"id\": 8}\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "\n     {\n    \"success\": {\n        \"7\": \"This Organization successfully deleted\",\n        \"8\": \"This Organization successfully deleted\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Request:",
          "content": "{\n  \"organizations\":  [\n     {\"id\": 2},\n     {\"id\": 5},\n     {\"id\": 999},\n     {\"id\" : 90}\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n   \"success\": {\n       \"1\": \"This Organization successfully deleted\",\n       \"5\": \"This Organization successfully deleted\"\n   },\n   \"errors\": {\n       \"90\": \"This Organization unsuccessfully deleted\",\n       \"999\": \"This Organization unsuccessfully deleted\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "DELETE",
    "url": "/organizations/:id",
    "title": "Delete Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Organization Id</p>"
          }
        ]
      }
    },
    "name": "DeleteOrganization",
    "group": "Organizations",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n   {\n   \"msg\": \"Organization successfully deleted\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"msg\": \"organization not found.\",\n    \"errors\": {\n        \"msg\": \"Invalid organization ID provided.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "PUT",
    "url": "/organizations/:Id",
    "title": "Edit Organization",
    "version": "0.1.0",
    "name": "EditOrganization",
    "group": "Organizations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>organization Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"CrmOrganization\":\n    {  \"address\": \"vbhj\",\n       \"country\": \"Egypt\",\n       \"email\": \"yas@net.com\",\n       \"name\": \"new test test\",\n       \"city_id\":1,\n       \"country_id\":1,\n       \"phone\": \"0113214135\",\n       \"description\" : \"Computer network company\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "   {\n   \"msg\": \"Organization successfully updated\",\n   \"organizationDetails\": {\n       \"CrmOrganization\": {\n           \"id\": \"2\",\n           \"name\": \"new test test\",\n           \"email\": \"yas@net.com\",\n           \"phone\": \"0113214135\",\n           \"mobile\": null,\n           \"address\": \"vbhj\",\n           \"description\": \"Computer network company\",\n           \"city_id\": \"1\",\n           \"country_id\": \"1\",\n           \"created_by\": \"1\",\n           \"is_visible\": true,\n           \"created\": \"2018-02-22 13:36:39\",\n           \"modified\": \"2018-02-22 13:52:06\"\n       },\n       \"createdBy\": {\n           \"id\": \"1\",\n           \"name\": \"Ayman Bedair\",\n           \"dob\": \"1987-03-11\",\n           \"personal_phone\": \"0101508076\",\n           \"other_phone_numbers\": \"\",\n           \"work_phone_ext\": \"333 / 777\",\n           \"work_mail\": \"ayman@memphistours.com\",\n           \"system_mail\": \"mte@memphistours.com\",\n           \"personal_mail\": \"aymanrb@gmail.com\",\n           \"address\": \"A1, New Awkaf Buildings, Hadayek El Koba, Cairo, Egypt\",\n           \"employment_date\": \"2003-02-01\",\n           \"last_login\": \"2012-01-05 13:17:21\",\n           \"created\": \"2009-07-10 19:13:53\",\n           \"modified\": \"2016-08-16 10:25:17\",\n           \"username\": \"admin\",\n           \"password\": \"0e2eb0a1b60e506603b94d486c263787f9c48eb1\",\n           \"branch_id\": \"1\",\n           \"active\": true,\n           \"is_visible\": true,\n           \"online\": true,\n           \"signature\": \"\",\n           \"assigned_requests\": \"0\",\n           \"manager_id\": \"3\",\n           \"time_sheet_id\": \"11\",\n           \"sheet_id\": null,\n           \"token_active\": \"2012-11-19 14:56:32\",\n           \"ws_token\": \"If:Gg0%mQ[qdE*<8DT0w.!ms?@XVWwh1\",\n           \"last_password_changed\": \"2016-08-16 10:25:17\",\n           \"company_id\": \"1\",\n           \"force_password_change\": false,\n           \"push_bullet_token\": \"OmgiDhNIzyWOY8soD3hlRK3hE0SjmNjt\",\n           \"allow_ips\": null\n       },\n       \"Country\": {\n           \"name\": \"United States\"\n       },\n       \"City\": {\n           \"name\": \"Cairo\"\n       },\n       \"Client\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"msg\":  \"Failed to update organization\",\n    \"errors\": {\n     \"name\": [\n        \"You already have this name added\"\n     ]\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "GET",
    "url": "organizations/",
    "title": "List Orgnizations",
    "version": "0.1.0",
    "name": "ListOrganization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Pagination Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortby",
            "description": "<p>Sort Method</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Sort Order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Optional Flag to indicate ac as a manger or normal staff [admin, staff].</p>"
          }
        ]
      }
    },
    "group": "Organizations",
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n \"organizations\": [\n   {\n       \"id\": \"6\",\n       \"name\": \"test\",\n       \"email\": \"test@mail.com\",\n       \"phone\": null,\n       \"mobile\": null,\n       \"address\": null,\n       \"description\": null,\n       \"city_id\": null,\n       \"country_id\": null,\n       \"created_by\": \"1\",\n       \"is_visible\": true,\n       \"created\": null,\n       \"modified\": null\n   }\n],\n\"count\": 1\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "get",
    "url": "/organizations/list-clients/:id",
    "title": "List Organization Clients",
    "name": "ListOrganizationClients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory organizationId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional limit number default set to 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "group": "Organizations",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n     \"clients\": [\n          \"Client\": {\n          \"id\": \"318893\",\n          \"name\": \"yasmineOBx\",\n          \"email\": \"amin@deemalab.com\",\n          \"phone\": \"0113214135\",\n          \"country_id\": \"2\",\n          \"address\": \"Masrgg El Gedida\",\n          \"passport_no\": null,\n          \"passport_issue_date\": null,\n          \"passport_expiry_date\": null,\n          \"client_group_id\": null,\n          \"payment_terms\": null,\n          \"is_visible\": true,\n          \"tax_card_num\": null,\n          \"city_id\": null,\n          \"dob\": null,\n          \"crm_points\": \"0\",\n          \"is_corporate\": false,\n          \"mobile\": null,\n          \"created_by\": \"1\",\n          \"crm_organization_id\": \"1\"\n       },\n       \"createdBy\": {\n          \"id\": \"1\",\n          \"name\": \"Yasmine Alaa\",\n          \"dob\": \"1987-03-11\",\n          \"personal_phone\": \"0101508076\",\n          \"other_phone_numbers\": \"\",\n          \"work_phone_ext\": \"333 / 777\",\n          \"work_mail\": \"\",\n          \"system_mail\": \"\",\n          \"personal_mail\": \"yasmine@deemalab.com\",\n          \"address\": \"A1, New Awkaf Buildings, Hadayek El Koba, Cairo, Egypt\",\n          \"employment_date\": \"2003-02-01\",\n          \"last_login\": \"2012-01-05 13:17:21\",\n          \"created\": \"2009-07-10 19:13:53\",\n          \"modified\": \"2018-01-30 11:26:52\",\n          \"username\": \"yasmine\",\n          \"password\": \"0e2eb0a1b60e506603b94d486c263787f9c48eb1\",\n          \"branch_id\": \"1\",\n          \"active\": true,\n          \"is_visible\": true,\n          \"online\": true,\n          \"signature\": \"\",\n          \"assigned_requests\": \"0\",\n          \"manager_id\": \"3\",\n          \"time_sheet_id\": \"11\",\n          \"sheet_id\": null,\n          \"token_active\": \"2018-01-30 12:26:52\",\n          \"ws_token\": \">[gahB;gx&VE6g.sGVKWpEHWAwCJ$4O1\",\n          \"last_password_changed\": \"2016-08-16 10:25:17\",\n          \"company_id\": \"1\",\n          \"force_password_change\": false,\n          \"push_bullet_token\": \"OmgiDhNIzyWOY8soD3hlRK3hE0SjmNjt\",\n          \"is_accessible\": true,\n          \"allow_ips\": null\n        },\n        \"Country\": {\n          \"name\": \"Afghanistan\"\n        },\n ],\n \"limit\": 50,\n \"count\": 17,\n \"current_page\": 1,\n \"last_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "get",
    "url": "/organizations/autocomplete",
    "title": "List Organizations AutoComplete",
    "name": "ListOrganizationsAutoComplete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional page No</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional limit number default set to 1000</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query",
            "description": "<p>Optional query string for autocomplete</p>"
          }
        ]
      }
    },
    "group": "Organizations",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"organizations\": [\n    {\n        \"id\": \"194\",\n        \"name\": \"Yas\",\n        \"email\": \"ya@yahoo.com\"\n    }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "GET",
    "url": "organizations/search",
    "title": "Search Organizations",
    "version": "0.1.0",
    "name": "SearchOrganizationAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Optional Pagination page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Mandatory Search Term</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Optional flag to act as [admin, staff]</p>"
          }
        ]
      }
    },
    "group": "Organizations",
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n  \"organizations\": [\n    {\n        \"id\": \"6\",\n        \"name\": \"test\",\n        \"email\": \"test@mail.com\",\n        \"phone\": null,\n        \"mobile\": null,\n        \"address\": null,\n        \"description\": null,\n        \"city_id\": null,\n        \"country_id\": null,\n        \"created_by\": \"1\",\n        \"is_visible\": true,\n        \"created\": null,\n        \"modified\": null\n    },\n    {\n        \"id\": \"5\",\n        \"name\": \"test1\",\n        \"email\": \"test@mail.com\",\n        \"phone\": null,\n        \"mobile\": null,\n        \"address\": null,\n        \"description\": null,\n        \"city_id\": null,\n        \"country_id\": null,\n        \"created_by\": \"5\",\n        \"is_visible\": true,\n        \"created\": null,\n        \"modified\": null\n    }\n   ],\n  \"last_page\": 1,\n  \"current_page\": 1,\n  \"limit\": 50,\n  \"count\": 1\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "GET",
    "url": "/organizations/:Id",
    "title": "view Organization",
    "version": "0.1.0",
    "name": "ViewOrganization",
    "group": "Organizations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>organization Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": ": Response-Example:",
          "content": "{\n   \"OrganizationDetails\": {\n      \"CrmOrganization\": {\n          \"id\": \"2\",\n          \"name\": \"new test test\",\n          \"email\": \"yas@net.com\",\n          \"phone\": \"0113214135\",\n          \"mobile\": null,\n          \"address\": \"vbhj\",\n          \"description\": \"Computer network company\",\n          \"city_id\": \"1\",\n          \"country_id\": \"1\",\n          \"created_by\": \"1\",\n          \"is_visible\": true,\n          \"created\": \"2018-02-22 13:36:39\",\n          \"modified\": \"2018-02-22 13:52:06\"\n      },\n      \"createdBy\": \"Ayman Bedair\",\n      \"Country\": {\n          \"name\": \"United States\"\n      },\n      \"City\": {\n          \"name\": \"Cairo\"\n      },\n      \"Client\": null,\n      \"RequestsInfo\": {\n          \"Requests\": [],\n          \"NetValues\": 0,\n          \"NumOfWon\": 0,\n          \"NumOfLost\": 0,\n          \"NumOfActive\": 0\n      }\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"msg\": \"Organization not found.\",\n\"errors\": {\n    \"msg\": \"Invalid organization ID provided.\"\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/main.php",
    "groupTitle": "Organizations"
  },
  {
    "type": "post",
    "url": "payments/main",
    "title": "Create new Request Payment",
    "name": "CreateRequestPayment",
    "group": "Payments",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n  \"RequestPayment\": {\n      \"payment_method_id\": \"4\",\n      \"name\": \"\",\n      \"payment_date\": \"2018-01-24\",\n      \"payment_amount\": \"600\",\n      \"currency_id\": \"5\",\n      \"visa_card_no\": \"6666777889999\",\n      \"notes\": \"ok\",\n      \"request_id\": \"90\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 created\n{\n \"RequestPayment\": {\n         \"id\": \"3\",\n         \"payment_method_id\": \"4\",\n         \"payment_amount\": \"210.00\",\n         \"payment_date\": \"2009-11-03\",\n         \"request_id\": \"30\",\n         \"attachment_file\": \"/attachments/payment_evidence/30/12572397523d-cars-3.jpg\",\n         \"currency_id\": \"2\",\n         \"created\": \"2009-11-03 11:15:52\",\n         \"conversion_rate\": \"1.0000\",\n         \"added_by\": null,\n         \"visa_card_no\": false,\n         \"visa_exp_date\": null,\n         \"approved\": null,\n         \"is_option\": \"0\",\n         \"external_agency_id\": null,\n         \"notes\": null,\n         \"scheduled_payment_id\": null\n     },\n     \"AddedBy\": {\n         \"name\": null\n     },\n     \"PaymentMethod\": {\n         \"id\": \"4\",\n         \"title\": \"To be Paid Upon Arrival\",\n         \"is_actual\": null,\n         \"is_visible\": true,\n         \"is_external\": null\n     },\n     \"Currency\": {\n         \"id\": \"2\",\n         \"currency\": \"United States Dollars\",\n         \"abbrev\": \"USD\",\n         \"symbol\": \"&#36;\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n     },\n     \"ExternalAgency\": {\n         \"id\": null,\n         \"name\": null,\n         \"contact_person\": null,\n         \"phone\": null,\n         \"mobile\": null,\n         \"fax\": null,\n         \"email\": null,\n         \"address\": null,\n         \"category\": null,\n         \"notes\": null,\n         \"created\": null,\n         \"modified\": null,\n         \"tax_card_num\": null,\n         \"type\": null,\n         \"external_agency_type_id\": null,\n         \"is_visible\": null,\n         \"branch_id\": null\n     }\n  },\n  \"msg\": \"Payment successfully added\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "delete",
    "url": "payments/main/:id",
    "title": "Delete Request Payment",
    "name": "DeleteRequestPayment",
    "group": "Payments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Payment successfully deleted\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/payments/methods-list",
    "title": "List Payment Methods",
    "name": "ListPaymentMethods",
    "group": "Payments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"methods\": {\n     \"1\": \"Online Payment\",\n     \"2\": \"Bank Transfer\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "post",
    "url": "/payments/paypal-checkout/:token",
    "title": "PayPal Checkout",
    "name": "PayPalCheckout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory lead token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"payment\": {\n     \"amount\":6,\n     \"card\":\"4008 0687 0641 8697\",\n     \"expiry\":{\n        \"M\":\" 07\",\n        \"Y\":\"2019\"\n     },\n     \"currency\":\"GBP\",\n     \"cvv\":\"321\",\n     \"first_name\":\"SEBASTIAN\",\n     \"last_name\":\"PORTER\",\n     \"address\":\"Admiral Court\",\n     \"city\":\"\",\n     \"zip\":\"\",\n     \"state\":\"\",\n     \"country_code\":\"US\",\n     \"method\":\"paypalDirect\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "group": "Payments",
    "version": "0.1.0",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errors\": \"Security header is not valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "put",
    "url": "payments/main/:id",
    "title": "Update Request Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n  \"RequestPayment\": {\n      \"payment_method_id\": \"4\",\n      \"name\": \"\",\n      \"payment_date\": \"2018-01-24\",\n      \"payment_amount\": \"600\",\n      \"currency_id\": \"5\",\n      \"visa_card_no\": \"6666777889999\",\n      \"notes\": \"ok\",\n      \"request_id\": \"90\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "UpdateRequestPayment",
    "group": "Payments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 ok\n{\n \"RequestPayment\": {\n         \"id\": \"3\",\n         \"payment_method_id\": \"4\",\n         \"payment_amount\": \"210.00\",\n         \"payment_date\": \"2009-11-03\",\n         \"request_id\": \"30\",\n         \"attachment_file\": \"/attachments/payment_evidence/30/12572397523d-cars-3.jpg\",\n         \"currency_id\": \"2\",\n         \"created\": \"2009-11-03 11:15:52\",\n         \"conversion_rate\": \"1.0000\",\n         \"added_by\": null,\n         \"visa_card_no\": false,\n         \"visa_exp_date\": null,\n         \"approved\": null,\n         \"is_option\": \"0\",\n         \"external_agency_id\": null,\n         \"notes\": null,\n         \"scheduled_payment_id\": null\n     },\n     \"AddedBy\": {\n         \"name\": null\n     },\n     \"PaymentMethod\": {\n         \"id\": \"4\",\n         \"title\": \"To be Paid Upon Arrival\",\n         \"is_actual\": null,\n         \"is_visible\": true,\n         \"is_external\": null\n     },\n     \"Currency\": {\n         \"id\": \"2\",\n         \"currency\": \"United States Dollars\",\n         \"abbrev\": \"USD\",\n         \"symbol\": \"&#36;\",\n         \"symbol_direction\": true,\n         \"is_visible\": true\n     },\n     \"ExternalAgency\": {\n         \"id\": null,\n         \"name\": null,\n         \"contact_person\": null,\n         \"phone\": null,\n         \"mobile\": null,\n         \"fax\": null,\n         \"email\": null,\n         \"address\": null,\n         \"category\": null,\n         \"notes\": null,\n         \"created\": null,\n         \"modified\": null,\n         \"tax_card_num\": null,\n         \"type\": null,\n         \"external_agency_type_id\": null,\n         \"is_visible\": null,\n         \"branch_id\": null\n     }\n  },\n  \"msg\": \"Payment successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/payments/main/:id",
    "title": "View Request Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "name": "ViewRequestPayment",
    "group": "Payments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"RequestPayment\": {\n       \"id\": \"3\",\n       \"payment_method_id\": \"4\",\n       \"payment_amount\": \"210.00\",\n       \"payment_date\": \"2009-11-03\",\n       \"request_id\": \"30\",\n       \"attachment_file\": \"/attachments/payment_evidence/30/12572397523d-cars-3.jpg\",\n       \"currency_id\": \"2\",\n       \"created\": \"2009-11-03 11:15:52\",\n       \"conversion_rate\": \"1.0000\",\n       \"added_by\": null,\n       \"visa_card_no\": false,\n       \"visa_exp_date\": null,\n       \"approved\": null,\n       \"is_option\": \"0\",\n       \"external_agency_id\": null,\n       \"notes\": null,\n       \"scheduled_payment_id\": null\n   },\n   \"AddedBy\": {\n       \"name\": null\n   },\n   \"PaymentMethod\": {\n       \"id\": \"4\",\n       \"title\": \"To be Paid Upon Arrival\",\n       \"is_actual\": null,\n       \"is_visible\": true,\n       \"is_external\": null\n   },\n   \"Currency\": {\n       \"id\": \"2\",\n       \"currency\": \"United States Dollars\",\n       \"abbrev\": \"USD\",\n       \"symbol\": \"&#36;\",\n       \"symbol_direction\": true,\n       \"is_visible\": true\n   },\n   \"ExternalAgency\": {\n       \"id\": null,\n       \"name\": null,\n       \"contact_person\": null,\n       \"phone\": null,\n       \"mobile\": null,\n       \"fax\": null,\n       \"email\": null,\n       \"address\": null,\n       \"category\": null,\n       \"notes\": null,\n       \"created\": null,\n       \"modified\": null,\n       \"tax_card_num\": null,\n       \"type\": null,\n       \"external_agency_type_id\": null,\n       \"is_visible\": null,\n       \"branch_id\": null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "payments/request-details/:token",
    "title": "View Request Payment Details",
    "name": "ViewRequestPaymentDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory lead Token</p>"
          }
        ]
      }
    },
    "group": "Payments",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 ok\n\n{\n  \"Request\": {\n      \"id\": \"30\",\n      \"price\": \"4000.00\",\n      \"currency_id\": \"3\",\n      \"token\": \"bOU59s\",\n      \"arrival_date\": \"2018-01-30\"\n  },\n  \"Staff\": {\n      \"name\": \"yasee\",\n      \"manager_id\": \"3\",\n      \"work_mail\": \"\",\n      \"system_mail\": \"\",\n      \"id\": \"1\",\n      \"Manager\": {\n          \"work_mail\": \"admin@memphistours.com\"\n      }\n  },\n  \"Client\": {\n      \"name\": \"Yasminxxxx\",\n      \"email\": \"lunabella20042004@yahoo.com\"\n  },\n  \"Country\": {\n      \"iso_alpha2\": null,\n      \"name\": null\n  },\n  \"Currency\": {\n      \"abbrev\": \"EGP\",\n      \"id\": \"3\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/permissions/job-titles/:job_title_id",
    "title": "List a JobTitle Permissions",
    "name": "ListJobTitlePermissions",
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_title_id",
            "description": "<p>Mandatory JobTitle ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{   \"permissions\":\n    {\n        \"System\": {\n            \"_create\":\"1\",\n            \"_read\":\"1\",\n            \"_update\":\"1\",\n            \"_delete\":\"1\"\n        },\n        \"System Settings\": {\n            \"_read\":\"1\",\n            \"_create\":\"1\",\n            \"_update\":\"1\",\n            \"_delete\":\"1\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "get",
    "url": "/permissions/users/:staff_id",
    "title": "List a User/Staff Permissions",
    "name": "ListStaffPermissions",
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Mandatory User/Staff ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{   \"permissions\":\n    {\n        \"System\": {\n            \"_create\":\"1\",\n            \"_read\":\"1\",\n            \"_update\":\"1\",\n            \"_delete\":\"1\"\n        },\n        \"System Settings\": {\n            \"_read\":\"1\",\n            \"_create\":\"1\",\n            \"_update\":\"1\",\n            \"_delete\":\"1\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "post",
    "url": "/permissions/job-titles/:id",
    "title": "ManageJobPermission",
    "name": "ManageJobPermission",
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory job_title_id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "allow",
            "description": "<p>Mandatory allow Param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n \"Permission\": {\n    \"title\": \"System Settings\",\n    \"action\": \"create\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>The action key could be create, update , read , delete</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Ok\n {\n  {\n  \"Make single call\": {\n      \"_create\": \"-1\",\n      \"_read\": \"-1\",\n      \"_update\": \"1\",\n      \"_delete\": \"-1\"\n  },\n  \"msg\": \"Successfully allowed the update permission\"\n}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n {\n  \"msg\": \"Permission not found.\",\n  \"errors\": {\n      \"msg\": \"Invalid Permission ID provided.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "post",
    "url": "/permissions/users/:id",
    "title": "ManageUserPermission",
    "name": "ManageUserPermission",
    "group": "Permissions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory user_id</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "allow",
            "description": "<p>Mandatory allow Param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n \"Permission\": {\n    \"title\": \"System Settings\",\n    \"action\": \"create\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>The action key could be create, update , read , delete</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Ok\n {\n  {\n  \"Make single call\": {\n      \"_create\": \"-1\",\n      \"_read\": \"-1\",\n      \"_update\": \"1\",\n      \"_delete\": \"-1\"\n  },\n  \"msg\": \"Successfully allowed the update permission\"\n}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 404 Not Found\n {\n  \"msg\": \"Permission not found.\",\n  \"errors\": {\n      \"msg\": \"Invalid Permission ID provided.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Permissions"
  },
  {
    "type": "put",
    "url": "/settings/items/activation/:id",
    "title": "Items Activation",
    "name": "ItemsActivation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_active",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>is_active is a boolean param has a one default value.</p>",
    "group": "Settings_Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n \"ItemsSetting\": {\n     \"id\": \"2\",\n     \"title\": \"Cruises\",\n     \"model_name\": \"RequestsCruise\",\n     \"is_visible\": true,\n     \"is_active\": \"0\"\n  },\n \"msg\": \"Item Successfully Updated!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Settings_Items"
  },
  {
    "type": "get",
    "url": "/settings/items/list",
    "title": "List Company Items",
    "name": "ListCompanyItems",
    "group": "Settings_Items",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n  \"items\": [\n      {\n          \"id\": \"1\",\n          \"title\": \"Hotels\",\n          \"model_name\": \"RequestsHotel\",\n          \"is_visible\": true,\n          \"is_active\": true\n      }\n  ],\n  \"msg\": \"Fetched Items!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Settings_Items"
  },
  {
    "type": "get",
    "url": "/settings/time-zones",
    "title": "List TimeZones",
    "name": "ListTimeZones",
    "group": "Settings_TimeZone",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n \"time_zones\": [\n     \"Australia/Adelaide\",\n     \"Australia/Broken_Hill\",\n     \"Australia/Darwin\",\n     \"Australia/North\",\n     \"Australia/South\",\n     \"Australia/Yancowinna\"\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Settings_TimeZone"
  },
  {
    "type": "post",
    "url": "/sources/main",
    "title": "Create Source",
    "name": "CreateSource",
    "group": "Sources",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Source\":{\n       \"id\":\"\",\n       \"source\":\"fb\",\n       \"order\":\"1\",\n       \"description\": \"ooo\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n  {\n  \"Source\": {\n      \"id\": \"189\",\n      \"source\": \"fb22\",\n      \"level\": \"0\",\n      \"source_desc\": null,\n      \"is_visible\": true,\n      \"order\": \"1\",\n      \"is_internal\": true,\n      \"is_paid\": false,\n      \"description\": \"ooo\"\n  },\n  \"msg\": \"Successfully created the requested source\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n  \"msg\": \"Failed to create the requested source!\",\n  \"errors\":  {\n    \"source\": [\n        \"This field is required and must be unique\"\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Sources"
  },
  {
    "type": "delete",
    "url": "sources/main/:id",
    "title": "Delete Source",
    "name": "DeleteSource",
    "group": "Sources",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Successfully deleted the requested source\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Sources"
  },
  {
    "type": "get",
    "url": "sources/main",
    "title": "List Sources",
    "name": "ListSources",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Optional limit number for limit results default set to 200</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>Optional Query Param for Search sources</p>"
          }
        ]
      }
    },
    "group": "Sources",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n  \"sources\": [\n      {\n          \"id\": \"186\",\n          \"source\": \"fb\",\n          \"level\": \"0\",\n          \"source_desc\": null,\n          \"is_visible\": true,\n          \"order\": \"1\",\n          \"is_internal\": true,\n          \"is_paid\": false,\n          \"description\": \"ooo\"\n      }\n   ],\n   \"limit\": 200,\n   \"msg\": \"fetched sources!\",\n   \"count\": 149,\n   \"current_page\": 1,\n   \"last_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Sources"
  },
  {
    "type": "put",
    "url": "/sources/main/:id",
    "title": "Update Source",
    "name": "UpdateSource",
    "group": "Sources",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Source\":{\n       \"source\":\"fb\",\n       \"order\":\"1\",\n       \"description\": \"ooo\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n  \"Source\": {\n      \"id\": \"189\",\n      \"source\": \"fb22\",\n      \"level\": \"0\",\n      \"source_desc\": null,\n      \"is_visible\": true,\n      \"order\": \"1\",\n      \"is_internal\": true,\n      \"is_paid\": false,\n      \"description\": \"ooo\"\n  },\n  \"msg\": \"Successfully updated the requested source\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n  \"msg\": \"Failed to update the requested source!\",\n  \"errors\":  {\n    \"source\": [\n        \"This field is required and must be unique\"\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Sources"
  },
  {
    "type": "get",
    "url": "sources/main/:id",
    "title": "View Source",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory id</p>"
          }
        ]
      }
    },
    "name": "ViewSource",
    "group": "Sources",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"Source\": {\n     \"id\": \"189\",\n     \"source\": \"uu\",\n     \"level\": \"0\",\n     \"source_desc\": null,\n     \"is_visible\": true,\n     \"order\": \"1\",\n     \"is_internal\": true,\n     \"is_paid\": false,\n     \"description\": \"ooo\"\n  },\n \"msg\": \"fetched source!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Sources"
  },
  {
    "type": "post",
    "url": "/stage",
    "title": "Create new Pipeline Stage",
    "name": "CreateStage",
    "group": "Stages",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"RequestStatus\": {\n        \"title\": \"bate5a stage\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n{\n    \"msg\": \"Created new pipeline Stage.\",\n    \"Stage\": {\n        \"id\": \"21\",\n        \"title\": \"bate5a stage\",\n        \"order\": \"21\",\n        \"active\": true,\n        \"is_visible\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Stage",
            "description": "<p>Created request_status (stage) in database.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Stages"
  },
  {
    "type": "delete",
    "url": "/stage/:stage_id",
    "title": "Delete a new Pipeline Stage",
    "name": "DeleteStage",
    "group": "Stages",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Deleted (soft) the pipeline RequestStatus.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Stages"
  },
  {
    "type": "put",
    "url": "/stages/:stage_id",
    "title": "Edit Piepline Stage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stage_id",
            "description": "<p>stage unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n\t\"RequestStatus\": {\n\t\t\"title\": \"mooooooz stage\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "name": "EditStage",
    "group": "Stages",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"msg\": \"Edited RequestStatus.\",\n    \"status\": {\n        \"id\": \"2\",\n        \"title\": \"mooooooz stage\",\n        \"order\": \"8\",\n        \"active\": true,\n        \"is_visible\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Stage",
            "description": "<p>Edited stage (request_status) in database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Stage not found. Please, provide a valid ID.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Stages"
  },
  {
    "type": "get",
    "url": "/stages",
    "title": "List Pipeline stages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Optional active stages flag.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_visible",
            "description": "<p>Optional visible stages flag.</p>"
          }
        ]
      }
    },
    "name": "ListStages",
    "group": "Stages",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"count\": 6,\n     \"stages\": [\n         {\n             \"id\": \"6\",\n             \"title\": \"New Request\",\n             \"order\": \"1\",\n             \"active\": true,\n             \"is_visible\": false\n         }  \"is_visible\": false\n     ]\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "stages",
            "description": "<p>Retrieved stages from database.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Stages"
  },
  {
    "type": "post",
    "url": "surveys/client-form-submission/:survey_id/:client_id",
    "title": "Client Form Submission Action",
    "name": "ClientFormSubmitAction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "survey_id",
            "description": "<p>Mandatory SurveyId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Mandatory ClientId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"SurveyQuestion\": [\n      {\n           \"answer_text\": \"\",\n           \"question_id\": \"12\",\n           \"question_type\": \"checkbox\",\n            \"offered_answer_id\": [\n               \"19\"\n             ]\n       },\n       {\n           \"answer_text\": \"\",\n         \"question_id\": \"13\",\n           \"question_type\": \"radio\"\n         \"offered_answer_id\": \"21\",\n       },\n       {\n           \"answer_text\": \"help\",\n           \"question_id\": \"14\",\n           \"question_type\": \"text\",\n           \"offered_answer_id\": \"\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "group": "Surveys",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Thanks for that, your feedback is appreciated!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "post",
    "url": "/surveys/main",
    "title": "Create Survey",
    "name": "CreateSurvey",
    "group": "Surveys",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"SurveyForm\": {\n      \"id\": \"\",\n      \"title\": \"titleedit test7\",\n      \"description\": \"desc1\"\n  },\n  \"SurveyQuestion\": [\n      {\n          \"question\": \"ques1 test\",\n          \"question_type\": \"checkbox\",\n          \"answer_text\": \"\",\n          \"id\": \"\",\n          \"SurveyAnswer\": [\n               {\n                  \"id\": \"\",\n                  \"answer\": \"ans11 test\"\n              },\n              {\n                  \"id\": \"\",\n                  \"answer\": \"ans12test\"\n              }\n          ]\n      },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 ok\n   {\n    \"SurveyForm\": {\n      \"id\": \"4\",\n      \"title\": \"titleedit test7\",\n      \"description\": \"desc1\",\n      \"is_visible\": true,\n      \"created\": \"2017-12-24 10:47:59\",\n      \"modified\": \"2018-03-08 13:50:11\",\n      \"created_by\": \"1\"\n   },\n   \"SurveyQuestion\": [\n      {\n          \"id\": \"12\",\n          \"survey_form_id\": \"4\",\n          \"question\": \"ques1 test\",\n          \"question_type\": \"checkbox\",\n          \"is_visible\": true,\n          \"created\": \"2018-03-08 13:50:11\",\n          \"modified\": \"2018-03-08 13:50:11\",\n          \"created_by\": \"1\",\n          \"SurveyAnswer\": [\n              {\n                  \"answer\": \"ans11 test\",\n                  \"id\": \"19\",\n                  \"survey_question_id\": \"12\"\n              }\n          ]\n      },\n  ],\n \"msg\": \"Survey successfully created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "delete",
    "url": "/surveys/main/:id",
    "title": "Delete Survey",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "name": "DeleteSurvey",
    "group": "Surveys",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Survey Successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "get",
    "url": "/surveys/main",
    "title": "List Surveys",
    "name": "ListAllSurveys",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "group": "Surveys",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n   \"surveys\": [\n      {\n          \"SurveyForm\": {\n              \"id\": \"2\",\n              \"title\": \"Form Templates\",\n              \"description\": \"Surveys and questionnaires are the perfect way to gauge customer, employee, or even just public opinion about your brand. Get started the easy way: select a free online survey template of JotForm. We have all the survey and reporting tools to find helpful data. It's perfect when you need to understand customer demographics, or when you need to conduct a market research survey.\",\n              \"is_visible\": true,\n              \"created\": \"2017-12-23 16:05:47\",\n              \"modified\": \"2017-12-29 11:34:09\",\n              \"created_by\": \"1\"\n          },\n          \"CreatedBy\": {\n              \"name\": \"yasee\"\n          }\n     }\n   ],\n  \"count\": 22\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "get",
    "url": "/surveys/client-logs/:client_id",
    "title": "List Client surveys",
    "name": "ListClientSurveys",
    "group": "Surveys",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Mandatory Client ID</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 ok\n   {\n    \"surveys\": [\n      {\n          \"SurveyClientAnswer\": {\n               \"id\": \"55\",\n               \"short_answer\": \"\",\n               \"survey_form_id\": \"4\",\n               \"survey_question_id\": \"12\",\n               \"survey_answer_id\": \"19\",\n               \"created\": \"2018-03-08 15:10:22\",\n               \"modified\": \"2018-03-08 15:10:22\",\n               \"client_id\": \"14\",\n               \"is_visible\": true\n           },\n           \"SurveyQuestion\": {\n                \"id\": \"5\",\n                \"question\": \"ques1 test\",\n                \"question_type\": \"checkbox\"\n           },\n           \"SurveyForm\": {\n               \"id\": \"5\",\n               \"title\": \"titleedit test7\",\n               \"description\": \"desc1\"\n           },\n           \"SurveyAnswer\": {\n                \"id\": \"19\",\n                \"answer\": \"ans11 test\"\n           }\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "post",
    "url": "/surveys/send/:id",
    "title": "Send Survey",
    "version": "0.1.0",
    "name": "SendSurvey",
    "group": "Surveys",
    "description": "<p>A specific survey could be sent to multiple clients by passing the clients emails seperated by &quot;,&quot; to SendMail Key in Post Body</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory $serveyId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"SurveyForm\":\n    {\n     \"SendMail\": \"yasmine@deemalab.com\",\n     \"subject\": \"Customer Satisfaction\",\n     \"message\":\"I've invited you to fill out a form: \"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n \"msg\": \"Survey Successfully sent\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "put",
    "url": "/surveys/main",
    "title": "Update Survey",
    "name": "UpdateSurvey",
    "group": "Surveys",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"SurveyForm\": {\n      \"id\": \"4\",\n      \"title\": \"titleedit test7\",\n      \"description\": \"desc1\"\n  },\n  \"SurveyQuestion\": [\n      {\n          \"question\": \"ques1 test\",\n          \"question_type\": \"checkbox\",\n          \"answer_text\": \"\",\n          \"id\": \"12\",\n          \"SurveyAnswer\": [\n               {\n                  \"id\": \"19\",\n                  \"answer\": \"ans11 test\"\n              },\n              {\n                  \"id\": \"20\",\n                  \"answer\": \"ans12test\"\n              }\n          ]\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 ok\n   {\n    \"SurveyForm\": {\n      \"id\": \"4\",\n      \"title\": \"titleedit test7\",\n      \"description\": \"desc1\",\n      \"is_visible\": true,\n      \"created\": \"2017-12-24 10:47:59\",\n      \"modified\": \"2018-03-08 13:50:11\",\n      \"created_by\": \"1\"\n   },\n   \"SurveyQuestion\": [\n      {\n          \"id\": \"12\",\n          \"survey_form_id\": \"4\",\n          \"question\": \"ques1 test\",\n          \"question_type\": \"checkbox\",\n          \"is_visible\": true,\n          \"created\": \"2018-03-08 13:50:11\",\n          \"modified\": \"2018-03-08 13:50:11\",\n          \"created_by\": \"1\",\n          \"SurveyAnswer\": [\n              {\n                  \"answer\": \"ans11 test\",\n                  \"id\": \"19\",\n                  \"survey_question_id\": \"12\"\n              }\n          ]\n      },\n  ],\n \"msg\": \"Survey successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "get",
    "url": "/surveys/main/:survey_id",
    "title": "View Survey",
    "name": "ViewSurvey",
    "group": "Surveys",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "survey_id",
            "description": "<p>Mandatory $surveyId</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n    \"SurveyForm\": {\n      \"id\": \"4\",\n      \"title\": \"titleedit test7\",\n      \"description\": \"desc1\",\n      \"is_visible\": true,\n      \"created\": \"2017-12-24 10:47:59\",\n      \"modified\": \"2018-03-08 13:50:11\",\n      \"created_by\": \"1\"\n   },\n   \"SurveyQuestion\": [\n      {\n          \"id\": \"12\",\n          \"survey_form_id\": \"4\",\n          \"question\": \"ques1 test\",\n          \"question_type\": \"checkbox\",\n          \"is_visible\": true,\n          \"created\": \"2018-03-08 13:50:11\",\n          \"modified\": \"2018-03-08 13:50:11\",\n          \"created_by\": \"1\",\n          \"SurveyAnswer\": [\n              {\n                  \"answer\": \"ans11 test\",\n                  \"id\": \"19\",\n                  \"survey_question_id\": \"12\"\n              }\n          ]\n      },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Surveys"
  },
  {
    "type": "put",
    "url": "/system/basic-configs",
    "title": "Update System Configs",
    "name": "UpdateSystemConfigs",
    "group": "SysConfigs",
    "description": "<p>name key could be &quot;timezone, currency, country, timeformat, dateformat, markettype&quot;</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"SysConfig\": {\n     \"name\": \"currency\",\n     \"value\": 3\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Ok\n   {\n    \"SysConfig\":{\n       \"id\":\"2\",\n       \"title\":\"System's Default Currency ID\",\n       \"key\":\"System.default_currency_id\",\n       \"value\":\"3\",\n       \"model\":null,\n       \"tag_name\":null,\n       \"allowed_values\":null,\n       \"is_editable\":false,\n       \"data_type\":\"String\",\n       \"created\":\"2018-03-29 08:35:44\",\n       \"modified\":\"2018-03-29 03:35:00\"},\n       \"msg\":\"Configuration successfully updated\"}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "SysConfigs"
  },
  {
    "type": "POST",
    "url": "/settings/task-types",
    "title": "Create TaskType",
    "name": "CreateTaskType",
    "group": "TaskTypes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n \"TaskType\": {\n         \"name\": \"type 11\"\n          }\n }",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"msg\": \"Activity Type successfully added\",\n    \"TaskType\": {\n        \"name\": \"type 11\",\n        \"id\": \"6\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"error\": {\n       \"name\": [\n           \"The subject of the type name is required\",\n           \"The subject of the type name is required\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "TaskTypes"
  },
  {
    "type": "DELETE",
    "url": "/settings/task-types/:id",
    "title": "Delete TaskType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>TaskType Id</p>"
          }
        ]
      }
    },
    "name": "DeleteTaskType",
    "group": "TaskTypes",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"TaskType\": {\n        \"id\": \"6\",\n        \"name\": \"type 1\",\n        \"is_visible\": false\n    },\n   \"msg\": \"Successfully deleted Task Type\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"msg\": \"Task Type does not exist.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "TaskTypes"
  },
  {
    "type": "PUT",
    "url": "/settings/task-types/:id",
    "title": "Edit TaskType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>TaskType Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"TaskType\": {\n       \"name\": \"type 1\"\n       }\n }",
          "type": "json"
        }
      ]
    },
    "name": "EditTaskType",
    "version": "0.1.0",
    "group": "TaskTypes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 Ok\n{\n     \"TaskType\": {\n         \"id\": \"6\",\n         \"name\": \"type 1\",\n         \"is_visible\": true\n     },\n     \"msg\": \"Successfully updated task type\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"msg\": \"Task Type does not exist.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "TaskTypes"
  },
  {
    "type": "GET",
    "url": "/settings/task-types",
    "title": "List TaskTypes",
    "name": "ListTaskTypes",
    "version": "0.1.0",
    "group": "TaskTypes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n      \"1\": \"Call\",\n      \"2\": \"E-Mail\",\n      \"3\": \"Meeting\",\n      \"4\": \"Task\",\n      \"5\": \"lunch\",\n      \"6\": \"type 1\",\n      \"msg\": \"Successfully get all activities types\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "TaskTypes"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create Task",
    "name": "CreateTask",
    "group": "Tasks",
    "description": "<p>To add/assign a task on some staff(person).</p>",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"SysTask\": {\n        \"lead_id\": 42,\n        \"title\": \"Bakr Meeting\",\n        \"start_date\": \"2017-10-15 3:00:00\",\n        \"due_date\": \"2017-10-18\",\n        \"assigned_to\": 21,\n        \"notes\": \"Don't tell him about the breach.\",\n        \"priority\": \"2\",\n        \"activity_type_id\": 3\n    } \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n     \"msg\": \"Created Successfully.\",\n     \"Task\": {\n         \"SysTask\": {\n             \"task_type\": 1,\n             \"model\": \"Request\",\n             \"model_key\": 42,\n             \"subject\": \"Confirm\",\n             \"created_by\": \"1\",\n             \"due_date\": \"2017-10-18\",\n             \"due_time\": null,\n             \"staff_id\": 21,\n             \"description\": \"lorem\",\n             \"status_id\": \"2\",\n             \"priority_id\": \"2\",\n             \"task_type_id\": 1,\n             \"id\": false\n         },\n         \"TaskType\": {\n             \"id\": \"1\",\n             \"name\": \"Progress\"\n         }\n     }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Task",
            "description": "<p>Created task in database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Task type doesn't exist.\",\n     \"errors\": {\n         \"activity_type_id\": \"Invalid ID.\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "delete",
    "url": "/tasks/:taskID",
    "title": "Delete Task",
    "name": "DeleteTask",
    "group": "Tasks",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taskID",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"msg\": \"Task Successfully deleted\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "put",
    "url": "/tasks/:taskID",
    "title": "Edit Task",
    "name": "EditTask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taskID",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"SysTask\": {\n        \"lead_id\": 42,\n        \"title\": \"Bakr Meeting\",\n        \"start_date\": \"2017-10-15 3:00:00\",\n        \"due_date\": \"2017-10-18\",\n        \"assigned_to\": 21,\n        \"notes\": \"Don't tell him about the breach.\",\n        \"priority\": \"2\",\n        \"activity_type_id\": 3\n    } \n}",
          "type": "json"
        }
      ]
    },
    "group": "Tasks",
    "description": "<p>To add/assign a task/activity on some staff(person).</p>",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"msg\": \"Updated Successfully.\",\n     \"Task\": {\n         \"SysTask\": {\n             \"task_type\": 1,\n             \"model\": \"Request\",\n             \"model_key\": 42,\n             \"subject\": \"Bakr 3ayz sho3lo\",\n             \"created_by\": \"1\",\n             \"due_date\": \"2017-10-18\",\n             \"due_time\": null,\n             \"staff_id\": 1,\n             \"description\": \"bal7a task\",\n             \"status_id\": \"2\",\n             \"priority_id\": \"2\",\n             \"task_type_id\": 1,\n             \"id\": \"28\"\n         },\n         \"TaskType\": {\n             \"id\": \"1\",\n             \"name\": \"Progress\"\n         }\n     }\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descriptive message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Task",
            "description": "<p>Created task in database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Task type doesn't exist.\",\n     \"errors\": {\n         \"activity_type_id\": \"Invalid ID.\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks/:taskID",
    "title": "View Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taskID",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "name": "GetTask",
    "group": "Tasks",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"Task\": {\n        \"SysTask\": {\n            \"id\": \"28\",\n            \"parent_id\": null,\n            \"staff_id\": \"21\",\n            \"created_by\": \"1\",\n            \"task_type\": \"1\",\n            \"model\": \"Request\",\n            \"model_key\": \"42\",\n            \"priority_id\": \"2\",\n            \"status_id\": \"2\",\n            \"subject\": \"Confirm\",\n            \"done_percentage\": null,\n            \"description\": \"lorem\",\n            \"due_date\": \"2017-10-18\",\n            \"started_on\": null,\n            \"completed_on\": null,\n            \"send_notification_email\": null,\n            \"watcher\": null,\n            \"created\": \"2018-02-27 16:23:45\",\n            \"modified\": \"2018-02-27 16:23:45\",\n            \"lft\": \"53\",\n            \"rght\": \"54\",\n            \"is_visible\": true,\n            \"task_type_id\": \"1\",\n            \"due_time\": null\n        },\n        \"Staff\": {\n            \"id\": \"21\",\n            \"name\": \"Mohamed Amer\"\n        },\n        \"CreatedBy\": {\n            \"id\": \"1\",\n            \"name\": \"Mohab Amr\"\n        },\n        \"Request\": {\n            \"id\": null,\n            \"subject\": null\n        }\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Task",
            "description": "<p>Retrieved task and related entities from database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Task not found.\",\n     \"errors\": {\n         \"msg\": \"Invalid Task ID provided.\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks/date/:date",
    "title": "List User's Tasks (on a date)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Mandatory date (yyyy-mm--dd)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "name": "ListDateTasks",
    "group": "Tasks",
    "version": "0.1.0",
    "description": "<p>Lists all tasks related to the signed in user on a specific date.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n   \"tasks\": [\n       {\n           \"SysTask\": {\n               \"id\": \"5\",\n               \"parent_id\": null,\n               \"staff_id\": \"1\",\n               \"created_by\": \"1\",\n               \"task_type\": \"1\",\n               \"model\": \"Request\",\n               \"model_key\": \"332165\",\n               \"priority_id\": \"1\",\n               \"status_id\": \"1\",\n               \"subject\": \"run\",\n               \"done_percentage\": null,\n               \"description\": null,\n               \"due_date\": \"2018-03-27\",\n               \"started_on\": null,\n               \"completed_on\": null,\n               \"send_notification_email\": null,\n               \"watcher\": null,\n               \"created\": \"2018-03-06 13:43:41\",\n               \"modified\": \"2018-03-06 13:44:14\",\n               \"lft\": \"9\",\n               \"rght\": \"10\",\n               \"is_visible\": false,\n               \"task_type_id\": \"1\",\n               \"due_time\": null\n           },\n           \"Staff\": {\n               \"name\": \"Ayman Bedair\"\n           },\n           \"CreatedBy\": {\n               \"id\": \"1\",\n               \"name\": \"Ayman Bedair\"\n           },\n           \"Request\": {\n               \"id\": \"332165\",\n               \"client_id\": \"318821\",\n               \"Client\": {\n                   \"id\": \"318821\",\n                   \"name\": \"Client with phone number: 16148868339\",\n                   \"email\": null\n               }\n           },\n           \"TaskType\": {\n               \"id\": \"1\",\n               \"name\": \"type edited\",\n               \"is_visible\": false\n           }\n       }\n   ],\n   \"msg\": \"Retrieved tasks on that day.\",\n   \"count\": 7,\n   \"current_page\": 1,\n   \"last_page\": 1,\n     \"limit\": 15\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Retrieved tasks and related entities from database.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/requests/tasks/:request_id",
    "title": "List Lead's Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request_id",
            "description": "<p>Mandatory REQUEST ID.</p>"
          }
        ]
      }
    },
    "name": "ListTasks",
    "group": "Tasks",
    "version": "0.1.0",
    "description": "<p>Lists all tasks related to the signed in user.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"tasks\": [\n        {\n            \"SysTask\": {\n                \"id\": \"32\",\n                \"parent_id\": null,\n                \"staff_id\": \"1\",\n                \"created_by\": \"1\",\n                \"task_type\": \"1\",\n                \"model\": \"Request\",\n                \"model_key\": \"42\",\n                \"priority_id\": \"2\",\n                \"status_id\": \"2\",\n                \"subject\": \"Bakr 3ayz sho3lo\",\n                \"done_percentage\": null,\n                \"description\": \"bal7a task\",\n                \"due_date\": \"2017-10-18\",\n                \"started_on\": null,\n                \"completed_on\": null,\n                \"send_notification_email\": null,\n                \"watcher\": null,\n                \"created\": \"2018-02-27 17:53:59\",\n                \"modified\": \"2018-02-27 17:53:59\",\n                \"lft\": \"61\",\n                \"rght\": \"62\",\n                \"is_visible\": true,\n                \"task_type_id\": \"1\",\n                \"due_time\": null\n            },\n            \"Staff\": {\n                \"name\": \"Mohab Amr\"\n            },\n            \"CreatedBy\": {\n                \"id\": \"1\",\n                \"name\": \"Mohab Amr\"\n            },\n            \"TaskType\": {\n                \"id\": \"1\",\n                \"name\": \"Progress\",\n                \"is_visible\": true\n            },\n            \"status\": \"Deferred\"\n        }\n    ],\n    \"count\": 14,\n    \"current_page\": \"1\",\n    \"last_page\": 1,\n    \"limit\": 15\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Retrieved tasks and related entities from database.</p>"
          }
        ]
      }
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/tasks/",
    "title": "List All User's Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional Page number for pagination of results.</p>"
          }
        ]
      }
    },
    "name": "ListTasks",
    "group": "Tasks",
    "version": "0.1.0",
    "description": "<p>Lists all tasks related to the signed in user.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"tasks\": [\n        {\n            \"SysTask\": {\n                \"id\": \"32\",\n                \"parent_id\": null,\n                \"staff_id\": \"1\",\n                \"created_by\": \"1\",\n                \"task_type\": \"1\",\n                \"model\": \"Request\",\n                \"model_key\": \"42\",\n                \"priority_id\": \"2\",\n                \"status_id\": \"2\",\n                \"subject\": \"Bakr 3ayz sho3lo\",\n                \"done_percentage\": null,\n                \"description\": \"bal7a task\",\n                \"due_date\": \"2017-10-18\",\n                \"started_on\": null,\n                \"completed_on\": null,\n                \"send_notification_email\": null,\n                \"watcher\": null,\n                \"created\": \"2018-02-27 17:53:59\",\n                \"modified\": \"2018-02-27 17:53:59\",\n                \"lft\": \"61\",\n                \"rght\": \"62\",\n                \"is_visible\": true,\n                \"task_type_id\": \"1\",\n                \"due_time\": null\n            },\n            \"Staff\": {\n                \"name\": \"Mohab Amr\"\n            },\n            \"CreatedBy\": {\n                \"id\": \"1\",\n                \"name\": \"Mohab Amr\"\n            },\n            \"Request\": {\n                \"id\": \"332165\",\n                \"client_id\": \"318821\",\n                \"Client\": {\n                    \"id\": \"318821\",\n                    \"name\": \"Client with phone number: 16148868339\",\n                    \"email\": null\n                }\n            },\n            \"TaskType\": {\n                \"id\": \"1\",\n                \"name\": \"Progress\",\n                \"is_visible\": true\n            },\n            \"status\": \"Deferred\"\n        }\n    ],\n    \"msg\": \"Retrieved tasks.\",\n    \"count\": 14,\n    \"current_page\": \"1\",\n    \"last_page\": 1,\n    \"limit\": 15\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Task",
            "description": "<p>Retrieved task and related entities from database.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"msg\": \"Task not found.\",\n     \"errors\": {\n         \"msg\": \"Invalid Task ID provided.\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mohab.php",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/users/all",
    "title": "List all Users",
    "name": "ListAllUsers",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"msg\": \"Retrieved Users.\",\n   \"Staff\": {\n       \"5\": \"Ahmed Fayez\",\n       \"6\": \"Fatima\"\n   },\n   \"count\": 166\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/sales",
    "title": "List Sales Users",
    "name": "ListSalesUsers",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"msg\": \"Retrieved users.\",\n   \"Staff\": {\n       \"5\": \"Ahmed Fayez\",\n       \"6\": \"Fatima\"\n   },\n   \"count\": 166\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/list/detailed",
    "title": "List All Staff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "term",
            "description": "<p>Optional search key could be name or email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "page",
            "description": "<p>Optional (pagination) page number.</p>"
          }
        ]
      }
    },
    "name": "ListStaff",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-Response:",
          "content": "HTTP/1.1 200\n  {\n      \"filtered\": true,\n      \"staff\": [\n          {\n              \"Staff\": {\n                  \"id\": \"831\",\n                  \"name\": \"Ahmed Mostafa\",\n                  \"work_mail\": \"urlaube@memphistours.com \"\n              },\n              \"JobTitle\": {\n                  \"title\": \"Tour Operator\"\n              },\n              \"Department\": {\n                  \"name\": \"German\"\n              }\n          }\n      ],\n      \"limit\": 100,\n      \"count\": 16,\n      \"current_page\": 1,\n      \"last_page\": 1\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/mokhtar.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/department/:department_id",
    "title": "List Staff By Department",
    "name": "ListStaffByDepartment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory department_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "term",
            "description": "<p>Optional Query Param for Search users</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "my_users_only",
            "description": "<p>Optional flag to list only the users in this department, values: [1,0]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Optional pagination page number</p>"
          }
        ]
      }
    },
    "description": "<p>by passing 1 to my_users_only query param you will get the requested department users only.</p>",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"filtered\": true,\n    \"my_users_only\": true,\n    \"users\": [\n        {\n            \"id\": \"20\",\n            \"name\": \"Neyazy Barakat\",\n            \"work_mail\": \"neyazy@memphistours.com\",\n            \"department_id\": \"1\",\n            \"previously_added\": true\n        }\n    ],\n    \"msg\": \"Fetched users.\",\n    \"limit\": 100,\n    \"count\": 1,\n    \"current_page\": 1,\n    \"last_page\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "View My Profile",
    "name": "MyProfile",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n     \"StaffProfile\": {\n         \"staff_id\": \"1\",\n         \"gender\": \"Male\",\n         \"ssn\": \"28703110100457\",\n         \"nationality_id\": null,\n         \"marital_status\": null,\n         \"military_status\": null,\n         \"blood_type\": null,\n         \"smoker\": null,\n         \"manager_id\": \"3\",\n         \"employment_status\": null,\n         \"address_2\": \"\",\n         \"city\": null,\n         \"country_id\": null,\n         \"zipcode\": null,\n         \"home_phone\": \"0222584643\",\n         \"medical_insurance\": false,\n         \"medical_insurance_company\": null,\n         \"medical_insurance_start_date\": null,\n         \"medical_insurance_end_date\": null,\n         \"medical_insurance_tags\": null,\n         \"skills_tags\": \"\",\n         \"salary_amount\": null,\n         \"salary_currency_id\": null,\n         \"salary_payment_frequency\": null,\n         \"salary_comments\": null\n     },\n     \"Staff\": {\n         \"id\": \"1\",\n         \"name\": \"Mohab Amr\",\n         \"dob\": \"1987-03-11\",\n         \"personal_phone\": \"0110828725\",\n         \"personal_mail\": \"aymanrb@gmail.com\",\n         \"address\": \"New Awkaff Buildings, Hadayek El Koba, Cairo, Egypt\",\n         \"employment_date\": \"2003-02-01\",\n         \"image\": \"/permFiles/images/Staff/original/1.jpg\"\n     },\n    \"Info\": {\n      \"NumOfWon\": 2,\n      \"NumOfLost\": 0,\n      \"NumOfCancelled\": 0,\n      \"prices\": [\n          {\n              \"abbrev\": \"USD\",\n              \"netValue\": \"200.00\"\n          },\n          {\n              \"abbrev\": \"EUR\",\n              \"netValue\": \"300.00\"\n          }\n      ],\n      \"total\": 2\n  },\n  \"msg\": \"Data Successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/me",
    "title": "Update My Profile",
    "name": "UpdateMyProfile",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   {\n    \"Staff\":{\n         \"name\":\"yasee\",\n         \"dob\":\"\",\n         \"personal_phone\":\"\",\n         \"personal_mail\":\"\",\n         \"address\":\"\",\n         \"active\":\"1\",\n         \"employment_date\":\"\",\n         \"work_mail\":\"\",\n         \"work_direct_phone\":\"\",\n   },\n   \"StaffProfile\":{\n         \"other_name\":\"nn\\/\",\n         \"gender\":\"Female\",\n         \"ssn\":\"\",\n         \"marital_status\":\"MARRIED\",\n         \"military_status\":\"Exempted\",\n         \"blood_type\":\"A-\",\n         \"smoker\":\"0\",\n         \"home_phone\":\"\",\n         \"zipcode\":\"\",\n         \"address_2\":\"\",\n         \"salary_amount\":\"\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"StaffProfile\": {\n        \"staff_id\": \"1\",\n        \"gender\": \"Male\",\n        \"ssn\": \"28703110100457\",\n        \"nationality_id\": null,\n        \"marital_status\": null,\n        \"military_status\": null,\n        \"blood_type\": null,\n        \"smoker\": null,\n        \"manager_id\": \"3\",\n        \"employment_status\": null,\n        \"address_2\": \"\",\n        \"city\": null,\n        \"country_id\": null,\n        \"zipcode\": null,\n        \"home_phone\": \"0222584643\",\n        \"medical_insurance\": false,\n        \"medical_insurance_company\": null,\n        \"medical_insurance_start_date\": null,\n        \"medical_insurance_end_date\": null,\n        \"medical_insurance_tags\": null,\n        \"skills_tags\": \"\",\n        \"salary_amount\": null,\n        \"salary_currency_id\": null,\n        \"salary_payment_frequency\": null,\n        \"salary_comments\": null\n    },\n    \"Staff\": {\n        \"id\": \"1\",\n        \"name\": \"Mohab Amr\",\n        \"dob\": \"1987-03-11\",\n        \"personal_phone\": \"0110828725\",\n        \"personal_mail\": \"aymanrb@gmail.com\",\n        \"address\": \"New Awkaff Buildings, Hadayek El Koba, Cairo, Egypt\",\n        \"employment_date\": \"2003-02-01\",\n        \"image\": \"/permFiles/images/Staff/original/1.jpg\"\n    },\n    \"msg\": \"Data Successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/profile/:id",
    "title": "Update User Profile",
    "name": "UpdateUserProfile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   {\n    \"Staff\":{\n         \"name\":\"yasee\",\n         \"dob\":\"\",\n         \"personal_phone\":\"\",\n         \"personal_mail\":\"\",\n         \"address\":\"\",\n         \"active\":\"1\",\n         \"employment_date\":\"\",\n         \"work_mail\":\"\",\n         \"work_direct_phone\":\"\",\n   },\n   \"StaffProfile\":{\n         \"other_name\":\"nn\\/\",\n         \"gender\":\"Female\",\n         \"ssn\":\"\",\n         \"marital_status\":\"MARRIED\",\n         \"military_status\":\"Exempted\",\n         \"blood_type\":\"A-\",\n         \"smoker\":\"0\",\n         \"home_phone\":\"\",\n         \"zipcode\":\"\",\n         \"address_2\":\"\",\n         \"salary_amount\":\"\"\n   },\n    \"JobTitle\":{\n         \"id\": 6\n    },\n\n   \"Department\":{\n       \"id\": 8\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"StaffProfile\": {\n        \"staff_id\": \"1\",\n        \"gender\": \"Male\",\n        \"ssn\": \"28703110100457\",\n        \"nationality_id\": null,\n        \"marital_status\": null,\n        \"military_status\": null,\n        \"blood_type\": null,\n        \"smoker\": null,\n        \"manager_id\": \"3\",\n        \"employment_status\": null,\n        \"address_2\": \"\",\n        \"city\": null,\n        \"country_id\": null,\n        \"zipcode\": null,\n        \"home_phone\": \"0222584643\",\n        \"medical_insurance\": false,\n        \"medical_insurance_company\": null,\n        \"medical_insurance_start_date\": null,\n        \"medical_insurance_end_date\": null,\n        \"medical_insurance_tags\": null,\n        \"skills_tags\": \"\",\n        \"salary_amount\": null,\n        \"salary_currency_id\": null,\n        \"salary_payment_frequency\": null,\n        \"salary_comments\": null\n    },\n    \"Staff\": {\n        \"id\": \"1\",\n        \"name\": \"Mohab Amr\",\n        \"dob\": \"1987-03-11\",\n        \"personal_phone\": \"0110828725\",\n        \"personal_mail\": \"aymanrb@gmail.com\",\n        \"address\": \"New Awkaff Buildings, Hadayek El Koba, Cairo, Egypt\",\n        \"employment_date\": \"2003-02-01\",\n        \"image\": \"/permFiles/images/Staff/original/1.jpg\",\n        \"DepartmentsStaff\": [\n          {\n            \"id\": \"2596\",\n            \"department_id\": \"2\",\n            \"staff_id\": \"1\"\n          }\n         ],\n        \"JobTitle\": [\n          {\n            \"id\": \"35\",\n            \"title\": \"Super Sys Admin\",\n            \"job_description\": \"\",\n            \"is_visible\": true,\n            \"JobTitlesStaff\": {\n                \"id\": \"1566\",\n                \"job_title_id\": \"35\",\n                \"staff_id\": \"1\"\n            }\n          }\n        ],\n        \"image\": \"/permFiles/images/Staff/original/1.jpg\"\n      },\n    \"msg\": \"Data Successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/me/upload",
    "title": "Upload User Image",
    "name": "UploadStaffImage",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "key : file",
          "type": "form-data"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"msg\": \"image uploaded Successfully\",\n    \"file\": \"D:\\\\wamp64\\\\www\\\\deema\\\\app\\\\webroot\\\\permFiles/images/Staff/large/1.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/activation/:id",
    "title": "User Activtion",
    "name": "UserActivation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_active",
            "description": "<p>Available values [0, 1]</p>"
          }
        ]
      }
    },
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n \"Staff\": {\n    \"id\": \"1\",\n    \"name\": \"yas\",\n    \"manager_id\": \"3\",\n    \"active\": false\n},\n\"msg\": \"Staff successfully updated\"",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/invitations",
    "title": "User Invitation",
    "name": "UserInvitation",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"emails\": [\n      {\n        \"email\": \"yasmine.alaa59@gmail.com\",\n        \"job_title_id\": 10\n      }\n    ]\n}",
          "type": "form-data"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n   \"msg\": \"Invited all users.\",\n   \"invitations\": [\n      {\n       \"email\": \"yasmine@deemalab.com\",\n       \"link\": \"https://tangram.yas/api_auth/sign_up_invitation/amltak5vdm9MelJrTlJVcTVnV3ZuOVl0Skl5UUxLNnFpOGZrZm5mbE0rRWNLMW5jcC9GdDhpYkhLbkE5UUlYbg==\"\n      }\n   ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n  \"msg\": \"Invited some users but there were some problems.\",\n  \"invitations\": [],\n  \"errors\": [\n     {\n      \"yasmine@deemalab.com\": \"Already sent invitation.\"\n     }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/profile/:id",
    "title": "View User Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "name": "ViewUserProfile",
    "group": "Users",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:zz",
          "content": "HTTP/1.1 200 OK\n{\n    \"StaffProfile\": {\n        \"staff_id\": \"1\",\n        \"gender\": \"Male\",\n        \"ssn\": \"28703110100457\",\n        \"nationality_id\": null,\n        \"marital_status\": null,\n        \"military_status\": null,\n        \"blood_type\": null,\n        \"smoker\": null,\n        \"manager_id\": \"3\",\n        \"employment_status\": null,\n        \"address_2\": \"\",\n        \"city\": null,\n        \"country_id\": null,\n        \"zipcode\": null,\n        \"home_phone\": \"0222584643\",\n        \"medical_insurance\": false,\n        \"medical_insurance_company\": null,\n        \"medical_insurance_start_date\": null,\n        \"medical_insurance_end_date\": null,\n        \"medical_insurance_tags\": null,\n        \"skills_tags\": \"\",\n        \"salary_amount\": null,\n        \"salary_currency_id\": null,\n        \"salary_payment_frequency\": null,\n        \"salary_comments\": null\n    },\n    \"Staff\": {\n        \"id\": \"1\",\n        \"name\": \"Mohab Amr\",\n        \"dob\": \"1987-03-11\",\n        \"personal_phone\": \"0110828725\",\n        \"personal_mail\": \"aymanrb@gmail.com\",\n        \"address\": \"New Awkaff Buildings, Hadayek El Koba, Cairo, Egypt\",\n        \"employment_date\": \"2003-02-01\",\n        \"image\": \"/permFiles/images/Staff/original/1.jpg\"\n    },\n    \"Info\": {\n        \"NumOfWon\": 2,\n        \"NumOfLost\": 0,\n        \"NumOfCancelled\": 0,\n        \"prices\": [\n            {\n                \"abbrev\": \"USD\",\n                \"netValue\": \"200.00\"\n            },\n            {\n                \"abbrev\": \"EUR\",\n                \"netValue\": \"300.00\"\n            }\n        ],\n        \"total\": 2\n    },\n    \"msg\": \"Data Successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/yasmine.php",
    "groupTitle": "Users"
  }
] });
