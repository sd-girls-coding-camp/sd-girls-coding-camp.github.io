#!/usr/bin/env python
import os

# Make the script's working directory the script's directory
cwd = os.path.dirname(os.path.abspath(__file__))
os.chdir(cwd)
print("Working in {}".format(cwd))

header = open("header.include", 'r').read()
footer = open("footer.include", 'r').read()

for file in os.listdir("."):
	if file.endswith(".html"):
		print("Building ../{}".format(file))
		input = open(file, 'r').read()
		output = open("../{}".format(file), 'w')
		output.write("<!-- AUTO GENERATED DO NOT EDIT!!! EDIT THIS FILE IN src/<filename> INSTEAD -->\n{}\n{}\n{}".format(header, input, footer))
