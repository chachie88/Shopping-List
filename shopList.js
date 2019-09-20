$(function() {
    function newListItem(value) {
        return $(`<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    };
    $('#js-shopping-list-form > button').click(function(event) {
        event.preventDefault();
        $('.shopping-list').append(newListItem($('#shopping-list-entry').val
        ()));
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    }); 
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        this.closest("li").remove();
    }); 
});