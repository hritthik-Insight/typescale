import "./TypeScale.css";


export const Typescale = () => {
    return(
    <div>

    <h3 id="display">Typography -- Display</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>D1</td>
                <td className="d1">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>54px</td><td>--fs-d1</td></tr>
                        <tr><td>Line Height</td><td>60px</td><td>--lh-d1</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.3px</td><td>--ls-d1</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>

                </td>
                <td>d1</td>
            </tr>
            <tr>
                <td>D2</td>
                <td className="d2">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>42px</td><td>--fs-d2</td></tr>
                        <tr><td>Line Height</td><td>48px</td><td>--lh-d2</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.3px</td><td>--ls-d2</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>

                </td>
                <td>d2</td>
            </tr>
            <tr>
                <td>D3</td>
                <td className="d3">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>36px</td><td>--fs-d3</td></tr>
                        <tr><td>Line Height</td><td>42px</td><td>--lh-d3</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.3px</td><td>--ls-d3</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>

                </td>
                <td>d3</td>
            </tr>
        </tbody>
    </table>


    <h3 id="headings">Typography -- Headings</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>H1</td>
                <td className="h1">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>30px</td><td>--fs-h1</td></tr>
                        <tr><td>Line Height</td><td>36px</td><td>--lh-h1</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.3px</td><td>--ls-h1</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>

                </td>
                <td>h1</td>
            </tr>
            <tr>
                <td>H2</td>
                <td className="h2">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>24px</td><td>--fs-h2</td></tr>
                        <tr><td>Line Height</td><td>30px</td><td>--lh-h2</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.3px</td><td>--ls-h2</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>

                </td>
                <td>h2</td>
            </tr>
            <tr>
                <td>H3</td>
                <td className="h3">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>20px</td><td>--fs-h3</td></tr>
                        <tr><td>Line Height</td><td>26px</td><td>--lh-h3</td></tr>
                        <tr><td>Letter Spacing</td><td>0px</td><td>--ls-h3</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>

                </td>
                <td>h3</td>
            </tr>
        </tbody>
    </table>

    <h3 id="body-text">Typography -- Body Text</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Body Bold</td>
                <td className="body-bold">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>16px</td><td>--fs-body-bold</td></tr>
                        <tr><td>Line Height</td><td>22px</td><td>--lh-body-bold</td></tr>
                        <tr><td>Letter Spacing</td><td>0.08px</td><td>--ls-body-bold</td></tr>
                        <tr><td>Font Weight</td><td>700</td><td>--fw-bold</td></tr>
                    </table>
                </td>
                <td>body-bold</td>
            </tr>
            <tr>
                <td>Body Regular</td>
                <td className="body-regular">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>16px</td><td>--fs-body-regular</td></tr>
                        <tr><td>Line Height</td><td>22px</td><td>--lh-body-regular</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.1px</td><td>--ls-body-regular</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>body-regular</td>
            </tr>

        </tbody>
    </table>

    <h3 id="links">Typography -- Links</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Text Link</td>
                <td className="text-link">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>16px</td><td>--fs-text-link</td></tr>
                        <tr><td>Line Height</td><td>22px</td><td>--lh-text-link</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.15px</td><td>--ls-text-link</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>text-link</td>
            </tr>

        </tbody>
    </table>

    <h3 id="buttons">Typography -- Buttons</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Button Small</td>
                <td className="button-small">Button Small Example</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>14px</td><td>--fs-button-small</td></tr>
                        <tr><td>Line Height</td><td>18px</td><td>--lh-button-small</td></tr>
                        <tr><td>Letter Spacing</td><td>0.1px</td><td>--ls-button-small</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>button-small</td>


            </tr>
            <tr>
                <td>Button Large</td>
                <td className="button-large">Button Large Example</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>16px</td><td>--fs-button-large</td></tr>
                        <tr><td>Line Height</td><td>20px</td><td>--lh-button-large</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.1px</td><td>--ls-button-large</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>button-large</td>
            </tr>
        </tbody>
    </table>


    <h3 id="captions">Typography -- Captions</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Caption</td>
                <td className="caption">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>14px</td><td>--fs-caption</td></tr>
                        <tr><td>Line Height</td><td>20px</td><td>--lh-caption</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.1px</td><td>--ls-caption</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>caption</td>
            </tr>
            <tr>
                <td>Caption Medium</td>
                <td className="caption-medium">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>14px</td><td>--fs-caption-medium</td></tr>
                        <tr><td>Line Height</td><td>20px</td><td>--lh-caption-medium</td></tr>
                        <tr><td>Letter Spacing</td><td>0px</td><td>--ls-caption-medium</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>caption-medium</td>
            </tr>
            <tr>
                <td>Caption Link</td>
                <td className="caption-link">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>14px</td><td>--fs-caption-link</td></tr>
                        <tr><td>Line Height</td><td>20px</td><td>--lh-caption-link</td></tr>
                        <tr><td>Letter Spacing</td><td>-0.1px</td><td>--ls-caption-link</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-regular</td></tr>
                    </table>
                </td>
                <td>caption-link</td>
            </tr>
        </tbody>
    </table>

    <h3 id="overline">Typography -- Overline</h3>
    <table className="typography-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Example</th>
                <th>Properties</th><th>Custom className Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Overline</td>
                <td className="overline">Lorem ipsum dolor sit amet</td>
                <td>
                    <table className="subtable">
                        <tr><th>Font Style</th><th>Value</th><th>Custom Variable Name</th></tr>
                        <tr><td>Font Size</td><td>12px</td><td>--fs-overline</td></tr>
                        <tr><td>Line Height</td><td>16px</td><td>--lh-overline</td></tr>
                        <tr><td>Letter Spacing</td><td>2.5px</td><td>--ls-overline</td></tr>
                        <tr><td>Font Weight</td><td>400</td><td>--fw-medium</td></tr>
                    </table>
                </td>
                <td>overline</td>
            </tr>
        </tbody>
    </table>


</div>
    );
}