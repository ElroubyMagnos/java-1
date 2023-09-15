function AddLink()
{
    var si = document.getElementById('slink');
    
    if (si.value.length > 0 && si.value.includes('http') && si.value.includes('.'))
    {
        document.getElementById('showlinks')
        .innerHTML += `
        <div style="margin-bottom: 5px;border-radius: 10px;padding: 5px;justify-content: space-between;display: flex;background-color: gray;height: 50px;">
            <p>${si.value}</p>
            <div style="display: flex;align-items: center;padding-right: 40px;">
                <p class="paralink" style="margin: 0;padding-right: 5px;">www.google.com/${Math.random()}</p>
                <button onclick="ChangeCopy(this);">Copy</button>
            </div>
        </div>`;
    }
    else
    {
        alert('invalid link');
    }
}

function ChangeCopy(copy)
{
    navigator.clipboard.writeText(copy.parentNode.querySelector('.paralink').innerText);
    copy.innerText = 'Copied';
    copy.style.backgroundColor = '#4B406B';
}