import { faker } from '@faker-js/faker';
import chalk from 'chalk';

const randomName = faker.name.firstName();

const randomColor = faker.color.rgb();

console.log(chalk.hex(randomColor)(randomName));

