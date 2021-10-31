$(document).ready(function() {
    let text = 'input[name=text]'
    let _let = 'abcdefghijklmnopqrstuvwxyz'.split``

    let bulk_text = localStorage.getItem('bulk_text') || ''
    let bulk_alias = localStorage.getItem('bulk_alias') || 'g'

    window.alias = bulk_alias || ''

    _let.map((v, i) => {
        $('#alias').append($('<option>', {
            value: v,
            text: v
        }))
    })

    $(text).val(bulk_text)
    $('#alias').val(bulk_alias).trigger('change')

    $('select').on('change', () => {
        window.alias = $(this).find(':selected').val()
        localStorage.setItem('bulk_alias', String(window.alias))
    })

    $(text).on('change', () => {
        localStorage.setItem('bulk_text', String($(text).val()))
    })

    $('button#start').on('click', e => {
        e.preventDefault()
        if (!window.alias) return alert('silahkan pilih alias terlebih dahulu!')

        let result = bahasa_planet($(text).val(), window.alias)
        $('textarea').empty().append(result)
    })

    $('button#follow').on('click', e => {
        e.preventDefault()
        window.location = 'https://instagram.com/isywl_'
    })

    $('button#play').on('click', e => {
        e.preventDefault()
        let text = $('textarea').val() || 'text tidak ditemukan, silahkan klik start terlebih dahulu'
        responsiveVoice.speak(text, 'Indonesian Female')
    })
})

/**
 * Konversi ke bahasa planet by ibnusyawall
 * Example: kamu menjadi kagamugu.
 * pastebin: https://pastebin.com/wzqHwhzh
 **/


function bahasa_planet(text, alias) {
    let result = ''
    text.split``.map(v => {
        result += (((v == 'a') ? v.replace('a', `a${alias}a`) : (v == 'i') ? v.replace('i', `i${alias}i`) : (v == 'u') ? v.replace('u', `u${alias}u`) : (v == 'e') ? v.replace('e', `e${alias}e`) : (v == 'o') ? v.replace('o', `o${alias}o`) : v ))
    })
    return result
}
