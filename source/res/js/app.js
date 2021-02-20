var drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
var button = document.querySelector('button');
var compute = document.querySelector('#compute');
var temp = document.querySelectorAll('.mdc-text-field');
var textFields = [];
var canvas = document.querySelector('#viewer');
for(i = 0 ; i<temp.length; i++)
{
    textFields.push(mdc.textField.MDCTextField.attachTo(temp[i]));
}
mdc.ripple.MDCRipple.attachTo(button);
mdc.ripple.MDCRipple.attachTo(compute);
button.addEventListener('click', function() {  drawer.open = !drawer.open; });
compute.addEventListener('click', evaluate);
function evaluate()
{
    var d,b,f,w,r, s, sc;
    d = document.querySelector('#input_1').value;
    b = document.querySelector('#input_2').value;
    w = document.querySelector('#input_3').value;
    f = document.querySelector('#input_4').value;
    r = document.querySelector('#input_5').value;
    s = `M0, 0 h${b} v${f} h${-(b-w-2*r)/2} a${r}, ${r} 0 0 0 ${-r}, ${r} v${d - 2*r - 2*f} a${r}, ${r} 0 0 0 ${r}, ${r} h${(b-w)/2 -r} v${f} h${-b} v${-f} h${(b-w)/2 - r} a${r}, ${r} 0 0 0 ${r}, ${-r} v${-d +2*r +2*f} a${r}, ${r} 0 0 0 ${-r}, ${-r} h${-(b-w-2*r)/2} v${f}`;
    canvas.innerHTML = `<path d="${s}" fill="#6200ee" stroke="none" stroke-width="3" />`;
    sc = Math.min(400/d, 400/b)
    canvas.setAttribute('transform', `matrix(${sc} 0 0 ${sc} 0 0)`);
}