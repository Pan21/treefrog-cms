VAR TREEFROG_SERVICE = (function(){

    var _getGetStartedContent = function(){
        let contentString = `<h1>TreeFrong CMS</h1><p>This is the screen where you will create your navigation and page content.</p>
        <p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p>
        <p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

        return contentStr;
    };

    var _getCreateNavButton = function(){
        let buttonString = `
    }

    return{
        getGetStartedContent: _getGetStartedContent
    }
});