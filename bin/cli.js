#!/usr/bin/env node
import fs from 'fs'
import { Render } from '../index.js'

const resume = JSON.parse(fs.readFileSync(process.stdin.fd, 'utf-8'))
const html = Render(resume)

process.stdout.write(html)
