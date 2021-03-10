const input = $(".text");

input.on("keyup", function(e)
{
    if(e.keyCode === 13 && input.val() != "")
    {
        const task = $("<div class='task'></div>").text(input.val());
        const nComp = $(".not_complited");
        const comp = $(".complited");
        const ok = $("<i class='icon-ok'></i>");
        const cancel = $("<i class='icon-cancel'></i>");

        nComp.append(task);
        task.append(cancel, ok);

        cancel.on("click", function()
        {
            const parent = $(this).parent();
            parent.fadeOut(function() 
                { 
                    parent.remove() 
                } 
            );
        });

        ok.on("click", function()
        {
            let parent = $(this).parent();
            parent.fadeOut(function()
                { 
                    comp.append(parent);
                    parent.fadeIn();
                    ok.remove();
                }
            ); 
        });

        //reste input
        input.val("");
        
    };
});