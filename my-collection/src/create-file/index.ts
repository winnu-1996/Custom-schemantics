import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { CreateFileOptions } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createFile(_options: CreateFileOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create(_options.path,'File created from schematic!')
    return tree;
  };
}
