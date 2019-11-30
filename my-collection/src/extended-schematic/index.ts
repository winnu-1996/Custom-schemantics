import { Rule, SchematicContext, Tree, chain, schematic } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function extendedSchematic(options: any): Rule {

  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Extending schematic');
    return chain([
      schematic('create-from-template', {
      ...options
    }),
    schematic('overwrite-file', {
      ...options
    }),
    extend()
  ])(tree, context)
  };
}

export function extend(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Extending schematic');
    return tree;
  };
}