/*
 * @Descripttion: 
 * @Author: Solarains
 * @Date: 2022-12-30 10:05:09
 */
import { Configuration } from './config';
import { formatName } from '../core/utils';

export class Column {
    name: string;
    type: string;
    nullable: boolean;
    comment: string;
    key: string;

    constructor(
        name: string,
        type: string,
        nullable: boolean,
        comment: string,
        key: string
    ) {
        this.name = name;
        this.type = type;
        this.nullable = nullable;
        this.comment = comment;
        this.key = key;
    }

    getFieldDefinition(config: Configuration, indent = 1) {

        let comment = this.comment
        let commentSplit = comment.split("\n")
        comment = commentSplit.join('\n' + ' '.repeat(indent * 4) + " * ")
        comment = `${'\n' + ' '.repeat(indent * 4)}/**${'\n' + ' '.repeat(indent * 4)} * ${comment}${'\n' + ' '.repeat(indent * 4)} */\n`


        return (this.comment ? comment : '') + ' '.repeat(indent * 4) + `public ${formatName(config, this.name)}${this.nullable ? '?' : ''}: ${this.type}${this.nullable ? ' | null | undefined' : ''};`;
    }
}