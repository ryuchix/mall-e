module.exports = {
    content: ['**/*.html'],
    css: ['assets/css/main.css'],
    options: {
      safelist: [
        /^bg-/, 
        /^text-/, 
        /^justify-/, 
        /^grid-/, 
        /^gap-/, 
        /^w-/, 
        /^pl-/, 
        /^pr-/, 
        /^ml-/, 
        /^mr-/, 
        /^hover-/, 
        /^space-/,  
        /^z-/, 
      ], 
    },
}
