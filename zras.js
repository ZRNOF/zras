#!/usr/bin/env node

import { program } from "commander"
import { fileURLToPath } from "url"
import { dirname } from "path"
import * as fs from "node:fs/promises"
import { color } from "./tools/Cleco.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const CWD = process.cwd()

const createTemplate = async (folderName) => {
	const templatePath = `${__dirname}/assets`
	const destination = `${CWD}/${folderName}`
	await fs.mkdir(destination)
	await fs.cp(templatePath, destination, { recursive: true })
	console.log(color(`✔ Create '${folderName}' Successfully!`, "#22ed5d"))
}

program.arguments("[folderName]").action(async (folderName = "assets") => {
	try {
		await fs.access(`${CWD}/${folderName}`)
		console.log(color(`✖ Directory '${folderName}' already exists.`, "#ed225d"))
		process.exit(1)
	} catch (error) {}

	await createTemplate(folderName)
})

program.parse(process.argv)
