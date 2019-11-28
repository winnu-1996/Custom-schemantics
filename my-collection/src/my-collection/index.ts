import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myCollection(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Info message');
    _context.logger.warn('Warn message');
    _context.logger.error('Error message');
    return tree;
  };
}
