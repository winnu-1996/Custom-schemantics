import { Rule, SchematicContext, Tree, externalSchematic, chain } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.


export function extendExternalSchematic(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([
      externalSchematic("@schematics/angular", "component", { ..._options }),
      extend(_options)
    ])(tree, context);
  };
}

export function extend(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Extending schematic', _options);
    tree.getDir(_options.sourceDir)
    .visit(filePath => {
      if (!filePath.endsWith('.html')) {
        return;
      }
      const buffer1 = tree.read(filePath);
      const buffer2 = tree.read('./files');

      const content1 = buffer1 ? buffer1.toString() : '';
      const content2 = buffer2 ? buffer2.toString() : '';

      context.logger.info(content1+"");
      context.logger.warn('Warn message');
      context.logger.info(content1+"");
      context.logger.error('Error message');
      // if (!content1) {
      //   return;
      // }

      

    tree.overwrite(filePath, content1+content2);
      // Prevent from writing license to files that already have one.
      // if (content.indexOf(licenseText) == -1) {
      //   tree.overwrite(filePath, licenseText + content);
      // }
    });
    return tree;
  };
}
