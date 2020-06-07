/*
 * @Descripttion: 
 * @Author: Solarains
 * @Date: 2022-12-29 22:43:54
 */
import { Configuration } from "../models/config";

export function upperFirst(str: string) {
    let camelCaseStr = toCamelCase(str)
    return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
}

export function toCamelCase(str: string) {
    if (str.indexOf('_') > -1) {
        str = str.replace(/_(\w)/g, (a, b) => {
            return b.toUpperCase();
        });
    }
    return str
}

export function toSnakeCase(str: string) {
    return str.replace(/([^A-Z])([A-Z])/g, function ($0, $1, $2) {
        return $1 + '_' + $2.toLowerCase();
    });
}

function isUpperCase(str: string) {
    return str === str.toUpperCase();
}

export function formatName(config: Configuration, name: string): string {
    switch (config.NamingConvention) {
        case 'camelCase':
            if (isUpperCase(name)) {
                return name.toLowerCase();
            }
            return toCamelCase(name)
        case 'pascalCase': return upperFirst(name);
        case 'snakeCase': return toSnakeCase(name);
        default: return upperFirst(name);
    }
}