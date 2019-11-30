import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
// import { OverWriteFileOptions } from './schema';
// import * as fs from 'fs'


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function overwriteFile(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
 
    // const buffer = tree.read(_options.path + "/" + _options.path + ".html");
    // const buffer1 = tree.read('./files/sample.html');
    // const content = buffer ? buffer.toString() : '';
    //const content1 = buffer1 ? buffer1.toString() : '';
    //_context.logger.info(content1 + "hello-----");

    // const templateSource = apply(url('./files'), [ 
    //   filter(path => path.endsWith('.html'))

    // ]);

    // const buffer: Buffer | null = tree.read(_options.path + "/" + _options.path + ".html");
    // const buffer1: Buffer | null = tree.read('sample.html');

    // let content = '';
    // let content1 = '';
    // if (buffer) {
    //   _context.logger.info(content + "hello-----");
    //   content = buffer.toString();
    // }
    // if (buffer1) {
    //   _context.logger.info(content1 + "hello-----");
    //   content1 = buffer1.toString();
    // }
    // // const comment = `// ¯\_(ツ)_/¯\n`;
    // if (!content.includes(content1)) {
    //   tree.overwrite(_options.path + "/" + _options.path + ".html", content + content1)
    // }
      
      
     
    
      
      const buffer1 = tree.read(_options.path + "/" + _options.path + ".html");
      // const buffer2  = tree.get('./files/sample.html')
      const buffer2 = tree.read('src/files/sample.html');
      _context.logger.info(buffer2+" ---- ---- --- ---");
      const content1 = buffer1 ? buffer1.toString() : '';
      const content2 = buffer2 ? buffer2.toString() : '';

      _context.logger.info(content2+"");
      _context.logger.warn('Warn message');
      _context.logger.info(content2+"");
      _context.logger.error('Error message');
      // if (!content1) {
      //   return;
      // }

      tree.overwrite(_options.path + "/" + _options.path + ".html", content2 + content1)

    //tree.overwrite(filePath, content1+content2);
      // Prevent from writing license to files that already have one.
      // if (content.indexOf(licenseText) == -1) {
      //   tree.overwrite(filePath, licenseText + content);
      // }
    
    return tree;

}
}

