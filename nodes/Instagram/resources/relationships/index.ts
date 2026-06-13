import type { INodeProperties } from 'n8n-workflow';

export const relationshipsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Relationships"
					]
				}
			},
			"options": [
				{
					"name": "GET Users Self Requested By",
					"value": "GET Users Self Requested By",
					"action": "List the users who have requested this user's permission to follow.",
					"description": "List the users who have requested this user's permission to follow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/self/requested-by"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/self/requested-by",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relationships"
					],
					"operation": [
						"GET Users Self Requested By"
					]
				}
			}
		},
];
