{
"description": "Double tap left_option to esc,map LeftOption to shift + command + 2",
"manipulators": [
{
"conditions": [
{
"name": "left_optionx2",
"type": "variable_if",
"value": 1
}
],
"from": { "key_code": "left_option" },
"to": [{ "key_code": "escape" }],
"type": "basic"
},
{
"conditions": [
{
"name": "CPY",
"type": "variable_unless",
"value": 1
}
],
"from": {
"key_code": "left_option",
"modifiers": { "optional": ["any"] }
},
"parameters": {
"basic.to_delayed_action_delay_milliseconds": 300,
"basic.to_if_alone_threshold_milliseconds": 140,
"basic.to_if_alone_timeout_milliseconds": 185
},
"to": [
{
"set_variable": {
"name": "left_optionx2",
"value": 1
}
},
{ "key_code": "left_option" }
],
"to_delayed_action": {
"to_if_canceled": [
{
"set_variable": {
"name": "left_optionx2",
"value": 0
}
}
],
"to_if_invoked": [
{
"set_variable": {
"name": "left_optionx2",
"value": 0
}
}
]
},
"to_if_alone": [
{
"set_variable": {
"name": "left_optionx2",
"value": 1
}
},
{
"key_code": "2",
"modifiers": ["left_shift", "left_command"]
}
],
"type": "basic"
}
]
}
