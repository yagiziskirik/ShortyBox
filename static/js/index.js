// Copyright (c) 2023 Yağız Işkırık
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

$(document).ready(() => {
    $('.sendActive').click(function() {
        const active = $(this).attr('data-active');
        $.ajax({
            url: "/",
            method: "POST",
            data: { active: active },
            success: (msg) => {
                console.log(msg);
            }
        });
    });
})
