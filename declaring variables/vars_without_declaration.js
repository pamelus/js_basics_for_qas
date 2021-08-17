variableWithoutDeclaration = 'some value';

function defineAnotherVariable() {
    antotherVariableWithoutDeclaration = 'another value';

    console.log('inside function:', variableWithoutDeclaration, antotherVariableWithoutDeclaration);
}

defineAnotherVariable();

console.log('after function is called:', variableWithoutDeclaration, antotherVariableWithoutDeclaration);
